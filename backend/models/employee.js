const mongoose = require('mongoose');

// const Employee = mongoose.model('Employee',{
const EmployeeSchema = new mongoose.Schema({  
name:{type:String},
    position:{type:String},
    dept:{type:String},
})

const Employee = mongoose.model("Emp",EmployeeSchema)
module.exports=Employee