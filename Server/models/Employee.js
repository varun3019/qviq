const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
    fname:String,
    email:String,
    password:Number,
    profile:String,
    phno:Number
})

const EmployeeModal = mongoose.model("employees", EmployeeSchema);

module.exports= EmployeeModal