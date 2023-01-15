import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Data/Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  apiurl_des='https://localhost:5000/Designation'
   apiurl='http://localhost:5000/employees'
  constructor(private http:HttpClient) { 

  }
  LoadDesignation(){
    return this.http.get(this.apiurl_des);
  }

  LoadAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiurl);
  }
  EmployeebyId(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.apiurl+'/'+id);
  }
  RemoveEmployeebyId(id:string){
    return this.http.delete(this.apiurl+'/'+id);
  }
  SaveEmployee(inputdata:any,id:any){
    console.error(id);
    if(id==undefined){
      return this.http.post(this.apiurl,inputdata);
    }
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }

}
