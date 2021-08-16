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
            type: String
        },
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);



const ReqModel = mongoose.model("Requests", requestSchema);

module.exports = ReqModel;