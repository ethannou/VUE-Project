const mongoose = require('mongoose');

const Workforce = mongoose.model("Job",{
    
    title: String ,
    description: String,
    education: String,
    experience: String,
    availability: String
    


});
module.exports = Workforce;