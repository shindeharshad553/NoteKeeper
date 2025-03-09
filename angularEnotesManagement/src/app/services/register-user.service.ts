import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }
private APIURL="http://localhost:8080/user/register";
  register(user:any):Observable<any>{
    return this.http.post(this.APIURL,user,{responseType:'text'});
  }
}
