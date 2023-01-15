import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'employee',component:EmployeeComponent,children:[
  {path:'',component:EmplistingComponent},
  {path:'create',component:CreateEmployeeComponent},
   {path:'edit/:id',component:CreateEmployeeComponent}]},
 {path:'**',component:HomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
