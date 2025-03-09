import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {

  constructor(private registerservice:RegisterUserService,private router:Router){}
  registerForm=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })

  registerUser(){
    this.registerservice.register(this.registerForm.value).subscribe((response)=>{
      console.log(response);

      // IF response is not null then return to the login page
      if(response!=null){
        this.router.navigate(['/login']);
      }
      this.registerForm.reset();
    });
  }
}
