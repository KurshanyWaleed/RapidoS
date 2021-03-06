const ReqModel = require("../models/requests");
const EmployeeModel = require("../models/employee");


module.exports.getAllTasks = async (req, res) => {
    console.log(req.body)
    const { id } = req.body;
    // var password = Math.random().toString(36).slice(-8);
    try {
        const tasks = await ReqModel.find({ employee: id }, {
            _id: 1,
            name: 1,
            address: 1,
            tel: 1,
            lat: 1,
            lng: 1,
            town: 1,
            typeOfIssue: 1,
            status: 1
        }).sort({ createdAt: -1 });
        lng = tasks.length;
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err)

        res.status(200).send({ err });
    }
};



module.exports.updateTask = async (req, res) => {
    try {
        await ReqModel.findByIdAndUpdate(
            req.body.id,
            { $set: { status: req.body.newStatus } },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                else return res.status(500).send({ message: err });
            }
        );


    } catch (err) {
        err => { console.log(err) }

    }
}
module.exports.addReq = async (req, res) => {

    const { name,
        address,
        tel,
        lat,
        lng,
        zip,
        gouvernarate,
        town,
        typeOfIssue,
        status } = req.body;


    try {
        const affected_employee = await EmployeeModel.find({
            employeeState: 'onService', gouvernarate: gouvernarate
        }, { _id: 1, tasks: 1, name: 1 })
        affected_employee.sort((a, b) => { return a.tasks.length - b.tasks.length })
        console.log(affected_employee[0].name)
        const employee = affected_employee[0]._id;
        const newReq = await ReqModel.create({
            name,
            address,
            tel,
            lat,
            lng,
            zip,
            gouvernarate,
            town,
            typeOfIssue,
            employee,
            status
        });

        const employeeED = await EmployeeModel.findOneAndUpdate({
            _id: employee
        }, { $push: { tasks: newReq._id } });

        res.status(201).json({ requested: newReq._id, employee_affected: employeeED._id });


    } catch (err) {
        console.log(err)
        res.status(200).send({ err });
    }
};