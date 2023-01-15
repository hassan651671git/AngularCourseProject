import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Data/Employee';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-emplisting',
  templateUrl: './emplisting.component.html',
  styleUrls: ['./emplisting.component.css']
})
export class EmplistingComponent implements OnInit{
 
  employeedata?:Employee[];

  constructor(private employeeService:EmployeeService,private router:Router){
      
  }
  ngOnInit(): void {
    this.LoadAll();
      
  }
  LoadAll() {
    this.employeeService.LoadAllEmployee().subscribe(result => {
      this.employeedata = result;
    });
  }
  delete(code: any) {
    if (confirm("Do you want remove?")) {
      this.employeeService.RemoveEmployeebyId(code).subscribe(result => {
        this.LoadAll();
      });
    }
  }
  
}
