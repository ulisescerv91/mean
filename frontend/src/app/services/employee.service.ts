import { Injectable } from '@angular/core';
//Para ahcer las llamadas al servidor
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly URL_API = 'http://localhost:8080/api/employees';
  selectedEmployee: Employee;
  employees: Employee[];

  constructor( private http:HttpClient) {
    //para que no marque error sobre la variable que se creo
    this.selectedEmployee = new Employee();
   }

  //Traer todos los empleado
  getEmployees() {
    return this.http.get(this.URL_API)
  }
  //Agregar empleado
  postEmployees( employee:Employee) {
    return this.http.post(this.URL_API,employee)
  }
  //actualizar empleado
  putEmployees( employee:Employee) {
    return this.http.put(this.URL_API + `/${employee._id}` , employee);
  }
  //delete empleado
  deleteEmployees( _id:string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
