import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
  
export class CreateEmployeeComponent implements OnInit {

  desigantiondata: any;
  saveresp: any;
  messageclass = '';
  message = '';
  EditData: any;
  Employeeid: any;
  constructor(private service: EmployeeService, private route: ActivatedRoute,private router:Router) {
    this.Employeeid = this.route.snapshot.paramMap.get('id');
    if (this.Employeeid != null && this.Employeeid != 0) {
         this.UpdateEmployee(this.Employeeid);
    }
  }

  ngOnInit(): void {
  }

  UpdateEmployee(id: string) {
    this.service.EmployeebyId(id).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.employeeform = new FormGroup({
          id: new FormControl({value:this.EditData.id,disabled:true}),
          name: new FormControl(this.EditData.name),
          email: new FormControl(this.EditData.email),
          phone: new FormControl(this.EditData.phone)
        });

      }
    });
  }

 public employeeform = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl('', Validators.required),
  });


  SaveEmployee() {
    if (this.employeeform.valid) {
      this.Employeeid = this.route.snapshot.paramMap.get('id');
      this.service.SaveEmployee(this.employeeform.value,this.Employeeid).subscribe(result => {
      this.router.navigate(['/employee']);

      });
    } else {
      this.message = "Please enter valid data"
      this.messageclass = 'error'
    }
  }
  get id(){
    return this.employeeform.get('id');
  }

  get name() {
    return this.employeeform.get('Name');
  }
   get phone() {
    return this.employeeform.get('Phone');
  }
   get email() {
    return this.employeeform.get('Email');
  }
 
}

