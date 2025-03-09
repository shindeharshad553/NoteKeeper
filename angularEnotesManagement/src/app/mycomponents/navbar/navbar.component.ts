import { Route, Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(private auth:AuthServiceService,private route:Router){}
    uid:any;
    loginStatus='';
    username:any;
    // ngOnInit(): void {
    //     // this.auth.currentStatus.subscribe((msg)=>{
    //     //   // keep the login status in the navbar.ts file in the loginStatus field
    //     //   this.loginStatus=msg;
    //     // })
    // }
    ngOnInit(): void {
      // Check the user is present in the local storage or not
      if(localStorage.getItem('uid')){
        this.uid=localStorage.getItem('uid');
        this.loginStatus='true';
        this.username=localStorage.getItem('username');
      }
    }

    logoutUser(){
      localStorage.removeItem('uid');
      localStorage.removeItem('username');
      this.loginStatus='false';
      this.route.navigate(['']);
    }

}
