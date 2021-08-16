const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const employeeSchema = new mongoose.Schema(
    {
        CIN: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String
        },
        passwordAuto: {
            type: String
        },
        gouvernarate: {
            type: String
        },
        employeeState: {
            type: String
        },
        tasks: {
            type: [mongoose.Schema.Types.ObjectId]
        }
    },
    {
        timestamps: true,
    }
);

// play function before save into display: 'block',

employeeSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

employeeSchema.statics.login = async function (email, password) {
    const Employee = await this.findOne({ email });
    if (Employee) {
        const auth = await bcrypt.compare(password, Employee.password);
        if (auth) {
            return Employee;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email')
};

const EmployeeModel = mongoose.model("employees", employeeSchema);

module.exports = EmployeeModel;