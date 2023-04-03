const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController')

// const ObjectId = require('mongoose').Types.ObjectId;

// const Employee = require('../models/employee')

router.post("/",employeeController.employee_create);
router.get("/",employeeController.employee_all);
router.get("/:employeeId",employeeController.employee_details);
router.put("/:employeeId",employeeController.employee_update);
router.delete("/:employeeId",employeeController.employee_delete);








//get Single Employee 

// router.get('/:id',(req,res)=>{
    
//     if(ObjectId.idValid(req.params.id)){
//         Employee.findById(req.params.id, (err,doc)=>{
           
//             if(err){
//                 console.log('Error in GET Employess by ID' + err);
//             }else{
//                 res.send(doc)
//             }

//         })
//     }else{
//         return res.status(400).send('No record found with ID ${req.params.id}');

//     }


// })




// //get API

// router.get('/', (req,res)=>{
 
   
//      Employee.find((err,doc) => {
//         if(err){
//             console.log('Error in GET data' + err);
//         }else{
//            res.send(doc)
//         }
//     })


// })




// //POST API

// router.post('/',async(req,res)=>{
//    console.log("employee")

//     let emp =   new Employee({
//         name:req.body.name,
//         position: req.body.position,
//         dept:req.body.dept,  
//     });
//    const employee=  await  emp.save()
//    console.log(employee)
//    res.json(employee)
// })
//     // emp.save((err,doc)=>{
//     //     if(err){
//     //         console.log('Error in Post data' + err);
//     //     }else{
//     //         res.send(doc);
//     //     }
//     // })

//  //put API
//  router.put('/:id',(req,res)=>{
//     if(ObjectId.isValid(req.params.id)){
//         let emp = {
//             name: req.body.name,
//             position: req.body.position,
//             dept: req.body.dept
//         }

//         Employee.findByIdAndUpdate(req.params.id, {$set:emp}, {new:true},(err,doc)=>{

//         if(err){
//             console.log('Error in Update Employee by ID' + err);
//         }else{
//             res.send(doc);
//         }



//         })
//     }
//  })



//     //delete  single employee
//  router.delete('/:id',(req,res)=>{
//     if(ObjectId.isValid(req.params.id)){
//         Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
//             if(err){
//                 console.log('Error in DELETE Employee by ID' + err);
//             }else{
//                 res.send(doc)
//             }
//         })
//     } else{
//         return res.status(400).send(`No record found with ID ${req.params.id}`);
//     }
//  })




module.exports = router;