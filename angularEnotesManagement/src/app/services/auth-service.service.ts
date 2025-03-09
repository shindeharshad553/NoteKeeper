import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    constructor() { }

    uid:any;

    loginstatus:any;
    username:any;

    setUserID(uid:any){
      this.uid=uid;
    }

    getUserID(){
      return this.uid;
    }

    setUserName(username:any){
      this.username=username;
    }

    currentStatus():Observable<any>{
      return this.loginstatus;
    }

    getUserName():Observable<any>{
      return this.username;
    }
}

