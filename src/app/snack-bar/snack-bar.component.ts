import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit  {
  snackBarText:string='';
  message: string;

  ngOnInit(){
   
  }

  constructor(private snackBar: MatSnackBar){}
  dismiss(): void {
    this.snackBar.dismiss();
  }


}
