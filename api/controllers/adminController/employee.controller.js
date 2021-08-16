const EmployeeModel = require('../../models/employee')

module.exports.addEmployee = async (req, res) => {
    console.log(req.body)
    const { CIN, name, gouvernarate, employeeState } = req.body;
    var password = Math.random().toString(36).slice(-8);
    try {
        const employee = await EmployeeModel.create({ CIN, name, password, passwordAuto: password, gouvernarate, employeeState });
        res.status(201).json({ employee: employee._id, passowrd: password });
    } catch (err) {
        console.log(err)

        res.status(200).send({ err });
    }
};