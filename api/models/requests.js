const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            max: 1024,
        },
        tel: {
            type: String,
            max: 10,
        },
        town: {
            type: String
        },
        gouvernarate: {
            type: String
        },
        zip: {
            type: String
        },
        typeOfIssue: {
            type: String
        },
        status: {
            type: String
        },
        employee: {
            type: [String]
        },
        lat: {
            type: Double
        },
        lng: {
            type: Double
        }
    },
    {
        timestamps: true,
    }
);

// play function before save into display: 'block',
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email')
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;