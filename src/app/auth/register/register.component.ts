import { Component, OnInit } from '@angular/core';
import { registerform } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:registerform={
    email:'',
    password:'',
    confirm_password:'',
  };
  
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  submit(){
    this.authservice.register(this.form);
  }

  isloading(){
    return this.authservice.isloading;
  }
}
