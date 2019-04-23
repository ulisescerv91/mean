import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';



//Esto es para que no se tome un valor de TypeScript sino de  Materialize
//Esta varible nos ayuda a ejecutar los eventos que vienen en esta libreria
declare var M:any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  
  addEmployee(form:NgForm){
    if(!form.value._id){
      //CUANDO se va agregar un nuevo usuario
      this.employeeService.postEmployees(form.value)
        .subscribe(res =>{
          console.log(res);
          //formatear  el form
          this.resetForm(form); 
          //Mostar el toast
          M.toast({html: 'Employee Saved!'});
          //Para que una vez que agregemos a un nuevo employee, volvamos a pedir todos los datos y nos aparezca el que acabamos de agregar
          this.getEmployees(); 
        })
    }
    else{
      //Se modificara un usuario existente
      this.putEmployee(form.value)
    }
  }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(res =>{
        console.log(res);
        //Esto para llenar a TODOS los empleado, la cual la respuesta es un array de Employees
        this.employeeService.employees = res as Employee[];
      })
  }

  //El envio del parametro FORM es pocional al agregarle el ?
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee;
    }
  }

  deleteEmployee(id:any){
    console.log("Deleting employee...");
    this.employeeService.deleteEmployees(id)
      .subscribe(res =>{
        this.getEmployees();
        this.employeeService.selectedEmployee = new Employee;
        M.toast({html: 'Employee Deleted!'})
      })
  }

  //Actualizar los datos en el form
  editEmployee(employee:Employee){
    this.employeeService.selectedEmployee = employee;
  }

  //Enviar los datos para su modificacion
  putEmployee(employee:Employee){
    console.log("Usuario a Modificar",employee.name);

    this.employeeService.putEmployees(employee)
      .subscribe(res=>{
        this.getEmployees();
        M.toast({html: 'Employee Edited!'});

      })
  }
}
