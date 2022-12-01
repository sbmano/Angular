import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { loginform, registerform } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isauthenticate:boolean=false;
  isloading:boolean=false;
  constructor(private router:Router) { }

login(form:loginform){
  if(this.isloading) return;
    this.isloading=true;
  const auth = getAuth();
signInWithEmailAndPassword(auth, form.email,form.password)
  .then((userCredential) => {
    this.isauthenticate=true;
    this.router.navigate(['']);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isauthenticate=false;
  })
  .finally(()=> (this.isloading=false));
}


passwordMatched:boolean=true;

register(form: registerform){
  if(form.password != form.confirm_password){
    this.passwordMatched=false;
    return;
  }
  if(this.isloading) return;
  this.isloading=true;
  const auth = getAuth();
createUserWithEmailAndPassword(auth, form.email, form.password)
.then((userCredential) => {
  this.isauthenticate=true;
})
.catch((error) => {
  this.isauthenticate=false;
  const errorCode = error.code;
  const errorMessage = error.message;
})
.finally(()=> (this.isloading=false));
}
logout(){
  const auth = getAuth();
signOut(auth).then(() => {
  this.router.navigate(['login']);
  this.isauthenticate=false;
}).catch((error) => {
  // An error happened.
});
}
}
