import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserRegistered=false;

  constructor( private http:HttpClient) { }


  signIn(email:string, password:string){
   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD00VvS1b3Oce9QDmtItsDE8XCUyj8mROE',{email,password});
  }

  login(email:string, password:string){
   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD00VvS1b3Oce9QDmtItsDE8XCUyj8mROE',{email,password});
  }

}
