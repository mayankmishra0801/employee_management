const Employee = require("../models/employee");

// to get all employee

const employee_all = async(req,res) =>{
  
    try{
        const employee1 = await Employee.find();
        res.json(employee1)
    }catch(error){
        res.json({message:error});
    }

};

//single employee

const employee_details = async(req,res)=>{
  

    try{
        const employee = await Employee.findById(req.params.EmployeeId);
        res.json(employee)
    }
    catch(error){
        res.json({message:error})
    }



};

//Add new Employee

const employee_create = async (req,res) =>{
    
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept : req.body.dept
    })

    try{
        const saveEmployee = await employee.save();
        res.send(saveEmployee);
    }catch(error){
        res.status(400).send(error);
    }



}





//update Employee

const employee_update = async(req,res) =>{

   try{
     
    const employee = {

     name: req.body.name,
     position: req.body.position,
     dept: req.body.dept


    };

    const updatedEmployee = await Employee.findByIdAndUpdate(
        {
            _id: req.params.employeeId
        },
        employee

    );
    res.json({updatedEmployee});

   }catch(error){
    res.json({message:error})
   }

};

//Delete Employee

const employee_delete = async (req,res)=>{
    try{
        const removeEmployee = await Employee.findByIdAndDelete(req.params.EmployeeId);
       res.json(removeEmployee)
    }catch(error){
        res.json({message:error})
    }
}

module.exports = {
    employee_all,
    employee_details,
    employee_create,
    employee_update,
    employee_delete
}