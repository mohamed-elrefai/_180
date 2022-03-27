const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    uid: {
     type: String,
     required: true
    },
    token:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    pic: {
      type: String,
    }
}, {timestamps: true});

module.exports = model('User', userSchema);