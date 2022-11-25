const mongoose = require('mongoose');
// const validate = require('validator');
// install bcrypt to hash the password
//Model
const User = mongoose.model("User",{
    first_name: { 
        type: String},
    last_name: { 
        type: String},
    email: { 
        type: String,
        required: true
},
    password: { 
        type: String,
        required: true
    }
});
module.exports = User;
