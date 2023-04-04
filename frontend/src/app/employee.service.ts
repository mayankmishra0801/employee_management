import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //for add
   url = 'http://localhost:4008/employees/';
  // for delete

  url1 = "http://localhost:4008/employees/:id";

  // for update

  url2 = "http://localhost:4008/employees/:id";

  // for all emaployee

  url3 = "http://localhost:4008/employees/find";




  constructor(private http:HttpClient) { }

  addEmployee(emp:Employee){
    return this.http.post(this.url,emp);
  }

  getEmployeeList(){
    return this.http.get<Employee[]>(this.url);
  }

  deleteEmployee(id: any){
    return this.http.delete(`${this.url}/${id}`)
  }

  updateEmployee(emp:Employee){
    return this.http.put(`${this.url}/${emp._id}`,emp)
  }

}
