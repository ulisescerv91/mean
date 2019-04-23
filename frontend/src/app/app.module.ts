import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//FORMS
//import {FormsModule} from '@angular/forms';
import { FormsModule }   from '@angular/forms';

//Service
import { EmployeeService } from './services/employee.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
