import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  email: string = '';
  password: string ='';


  login(){
    console.log('Email:', this.email)
    console.log('Passord:', this.password)


  }


}
