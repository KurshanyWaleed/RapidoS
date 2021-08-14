const UserModel = require("../models/users");
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errors");


const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge,
    });
};

module.exports.signUp = async (req, res) => {
    console.log(req.body)
    const { name, surname, email, password, address, tel, form, companyName, town, zip, gouvernarate } = req.body;


    try {
        const user = await UserModel.create({ name, surname, email, password, address, tel, form, companyName, town, zip, gouvernarate });
        res.status(201).json({ user: user._id });
    } catch (err) {
        console.log(err)
        const errors = signUpErrors(err);
        res.status(200).send({ errors });
    }
};

module.exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge });
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = signInErrors(err);
        res.status(200).json({ errors });
    }
};

module.exports.logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
};
