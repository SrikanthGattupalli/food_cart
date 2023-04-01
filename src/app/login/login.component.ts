import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 
  login:FormGroup;
  errorMessage:string='';


  constructor(private authentication:AuthService,
    private router:Router,
    private snackBar:MatSnackBar,
    private auth:AuthService){

  }

  ngOnInit(){

    this.login=new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(5)]),
    })
    
  }

  userLogin(email:string, password:string){
    this.authentication.login(email, password).subscribe((data:any)=>{
      this.auth.isUserRegistered=data.registered;
    },error=>{
      let errorText=error.error.error.message;
      if(errorText=='EMAIL_NOT_FOUND'){
        this.errorMessage='User Email Not Found';
        this.openSnackBar(this.errorMessage,'close');
      }else if(errorText=='INVALID_PASSWORD'){
        this.errorMessage='Invalid Password';
        this.openSnackBar(this.errorMessage,'close');

      }else if(errorText=='USER_DISABLED'){
        this.errorMessage='User Disabled';
        this.openSnackBar(this.errorMessage,'close');
      }

      this.openSnackBar(this.errorMessage,'close');


    });
    setTimeout(()=>{
      if(this.authentication.isUserRegistered){
        this.router.navigate(['/home']);
      }
  

    },1000)
    

  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.panelClass='snackBarStyle';
    config.duration=2000;
   
    this.snackBar.open(message, action,config);
    
    
    
    
    // this.snackBar.dismiss
  }

}
