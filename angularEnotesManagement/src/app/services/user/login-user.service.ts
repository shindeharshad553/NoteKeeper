import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http:HttpClient) { }

  private APIURL="http://localhost:8080/user/login";
  loginUser(user:any):Observable<any>{
    // It is expecting the result in the JSON format and the bakend is returning the string so we have
    // set the responseType to text
    return this.http.post(this.APIURL,user);
  }
}
