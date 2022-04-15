const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        max: 200
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    profilePics: {
        type: String,
        default: ""
    },
    token: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = model('user', userSchema)