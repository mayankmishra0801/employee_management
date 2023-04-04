import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{



  empForm:any;
  showModal: boolean = false;
  editMode:boolean = false;
  employeeData:Employee[]=[];
  employee:any=
  {
   _id:'',
  employeeId:'',
  name: '',
  email:'',
  position: '',
  dept:''
}


  constructor(private fb:FormBuilder,private empService:EmployeeService) {

  }

  ngOnInit(): void {
      this.getEmployees();
      this.empForm=this.fb.group({
        employeeId:[''],
        name:['',Validators.required],
        _id:'',
        designation:['',Validators.required],
        email:['',Validators.required],
        contact:[''],

      })
  }

  getEmployees(){
    this.empService.getEmployeeList().subscribe((res:Employee[]) =>{
      console.log(res);
      // this.employees=res;
    })
  }

  onEditEmployee(emp:Employee){
    this.editMode = true;
    this.showModal = true;
    this.empForm.patchValue(emp);
  }

  onEmpSubmit(){
    this.employeeData.push(this.employee)
    if(this.empForm.valid){
      if(this.editMode){
        this.empService.updateEmployee(this.empForm.value).subscribe(
          res => {
            this.getEmployees();
            this.onCloseModal();
          },err => console.log(err))
      }
      else{
        this.empService.addEmployee(this.empForm.value).subscribe(
          res => {
            this.getEmployees();
            this.onCloseModal();
          },err => console.log(err))
      }
    }
  }
   onAddEmployee(){
    this.showModal=true;
    // this.employeeData.push(this.employee)
   }

   onCloseModal():any{
    this.showModal=false;
    this.editMode = false;
   }

   onDeleteEmployee(id:any){
    if(confirm('Do you want to delete this employee?')){
      this.empService.deleteEmployee(id).subscribe(
        (res) => {
          console.log(res);
          this.getEmployees();
        },
        err => {
          console.log(err);
        })
    }
  }










//   empForm: any;
//   showModal : boolean= false;
//   editMode: boolean = false;
//   employees: Employee[] = [];


//   constructor(private fb: FormBuilder, private empService: EmployeeService){}
//   ngOnInit(): void {

//     this.getEmployees();
//     this.empForm = this.fb.group({

//       _id: [''],
//       name:['Mayank', Validators.required],
//       position:['Full Stack Developer ', Validators.required],
//       dept: ['Development']

//     })


//   }

//   getEmployees(){
//     this.empService.getEmployeeList().subscribe((res:Employee[])=>{
//       console.log(res);
//       this.employees = res;
//     })
//   }

//   onEditEmployees(emp:Employee){

//     this.editMode = true;
//     this.showModal = true;
//     this.empForm.patchValue(emp);


//     }


//   onEmpSubmit(){
//     if(this.empForm.valid){

//      if(this.editMode){

//       this.empService.updateEmployee(this.empForm.value).subscribe(
//         res=>{
//           console.log(res)

//           this.getEmployees();
//           this.onCloseModal();
//         },
//         err =>{
//           console.log(err)
//         }
//       )
//  }else{

//       this.empService.addEmployee(this.empForm.value).subscribe(
//         res=>{
//           console.log(res)

//           this.getEmployees();
//           this.onCloseModal();
//         },
//         err =>{
//           console.log(err)
//         }
//       )

//      }


//     }
//   }


// onAddEmployee(){
//   this.showModal = true;

// }

// onCloseModal(){
//   this.showModal = false;
// }

// onDeleteEmployee(){
//   if(confirm('Are you sure you want to delete this employee>')){
//     this.empService.deleteEmployee(id).subscribe((res: any)=>{
//       console.log(res);
//       this.getEmployees();
//     }, (err: any)=>{
//        console.log(err);
//     })
//   }
// }




// function onDeleteEmployee() {
//   throw new Error('Function not implemented.');
// }

// function onAddEmployee() {
//   throw new Error('Function not implemented.');
// }

// function onCloseModal() {
//   throw new Error('Function not implemented.');
// }


}



