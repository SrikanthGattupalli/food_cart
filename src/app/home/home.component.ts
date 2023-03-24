import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../service/data-api.service';
import { DataSharingService } from '../service/data-sharing.service';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  displayItems=true;
  displayCartItems=false;
  displayAdminScreen=false;
  breakFastData:any[]=[];
  cartCount:number;
 

  constructor(private router: Router,
    private api:DataApiService,
    private dataShare:DataSharingService,
    private dialog:MatDialog
    ) { }
    
  ngOnInit() {
    // this.displayItems=true;
    // this.displayCartItems=false;
    // this.displayAdminScreen=false;

    this.getBreakfastDataOut();
    this.dataShare.addToCartPressed.subscribe(event => {
      this.dataShare.displayCartData();
        
        
      setTimeout(() => {
        this.cartCount= this.dataShare.cartItemsCountDataSharing;
      
      },1000);

      this.cartCount= this.dataShare.cartItemsCountDataSharing;
     
    })

    // console.log(this.cartCount);

    
  }

  onClickCart(){
   
    this.displayItems=false;
    this.displayCartItems=true;

    this.router.navigate(['/cart']);

  }

  onClickHome(){
    // this.api.getTotalItems();
    
    this.displayCartItems=false;
    this.displayItems=true;
    this.router.navigate(['/home']);
  }

  onClickAdmin(){
    this.router.navigate(['/admin']);
  }

  getBreakfastDataOut(){
    this.api.getBreakFastData().subscribe((data:any)=>{
      console.log(data);
      let key=Object.keys(data);
      let arr=[];
      arr.push(data);
      for(let i=0;i<key.length;i++){
        this.breakFastData.push(arr[0][key[i]]);
      }
      console.log(this.breakFastData[0]);
    })
  }


  openNotificationsDialog() {
   
    const dialogRef = this.dialog.open(NotificationsComponent, {
      width: '400px',
      height: '800px',
      position:{left:'0'}
      
    });
    console.log('hello');
  }

 




  

}
