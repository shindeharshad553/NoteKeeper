import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { LoginUserService } from 'src/app/services/user/login-user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor(private login:LoginUserService,private auth:AuthServiceService,private router:Router){}
  // create a form group name as loginForm
  loginForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  username='';
  responseMsg=''
  validateUser(){
    console.log(this.loginForm.value);
    this.login.loginUser(this.loginForm.value).subscribe((response=>{

      console.log(response);
      // set the user id in auth

      if (response && response.uid) {
        console.log(response.uid);
        localStorage.setItem('uid',response.uid);
        localStorage.setItem('username',response.firstName);
        // redirect to the add note page
        this.router.navigate(['/add-note']);

      } else {
        console.error('UID not found in response:', response);
      }
      // console.log(response.firstName);
      this.loginForm.reset();
    }));
  }
}
