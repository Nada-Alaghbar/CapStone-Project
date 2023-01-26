import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/lib/interFaces/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // form= this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(8)]],
  // });
  // constructor(private fb: FormBuilder, private LoginService: LoginService, private router:Router){

  //   }
  //   submit(){
  //     this.LoginService.signIn(
  //       this.form.get('email')?.value+'',
  //       this.form.get('password')?.value+''
  //     ).then((user)=> {
  //       //navigate to admin/
  //       this.router.navigate(['admin/']);

       
  //     }).catch((error)=> {
  //       alert ("ERROR")
  //     });
  //   }
}
