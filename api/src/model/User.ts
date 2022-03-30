import { Schema, model } from 'mongoose';

const newUser = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 500
    },
    ProfileImage: {
        type: String,
        default: ""
    }
}, {timestamps: true})

const user = model('User', newUser);

export default user;