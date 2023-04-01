import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AuthService } from '../service/auth.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUp:FormGroup;
  errorMessage:string;



  constructor( private authentication:AuthService,
    private snackBar: MatSnackBar,
    private dialog:MatDialog){

  }

  ngOnInit(){

    this.signUp=new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
    })
    
  }

  userSignUp(email:string,password:string){
    console.log(this.signUp);
    this.authentication.signIn(email,password).subscribe((data:any)=>{
      console.log(data);
    },error=>{
      let errorText=error.error.error.message;
      console.log(error.error.error.message)
      if(errorText=="EMAIL_EXISTS"){
        // this.openSnackBar()
        this.errorMessage="Email Already Exists";
        this. openSnackBar(this.errorMessage,'close');
        // this. showSnackbarCssStyles(this.errorMessage, 'close');
        // this.showSnackbarCssStyles(this.errorMessage,'close');
        
      }

    })

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

  // showSnackbarCssStyles(content:string, action:string) {
  //   let sb = this.snackBar.open(content, action, {
  //     duration: 3000,
  //     panelClass: ["custom-style"]
  //   });
  //   sb.onAction().subscribe(() => {
  //     sb.dismiss();
  //   });
  // }


  // openSnackBar(){
  //   const dialogRef = this.dialog.open(SnackBarComponent, {
  //     timeout:3000;
  //     width: '200px',
  //     height: '50px',
  //     position:{top:'0'}
      
  //   });
  // }

  // openSnackbar(content:string, action:string) {
  //   this.snackBar.openFromComponent(SnackBarComponent, {
  //     duration: 5000,
  //     verticalPosition: 'top',
  //     horizontalPosition:'center',
  //     data: { message: 'Hello, world!' },
  //     panelClass:''
  //   });
  // }




}
