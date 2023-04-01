import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../service/data-api.service';
import { DataSharingService } from '../service/data-sharing.service';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { NotificationsComponent } from '../notifications/notifications.component';
import { AuthService } from '../service/auth.service';
import { PageEvent } from '@angular/material/paginator';

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
  isUserLoggedIn:boolean=false;
  isUserLoggedOut:boolean=false;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent;
 

  constructor(private router: Router,
    private api:DataApiService,
    private dataShare:DataSharingService,
    private dialog:MatDialog,
    private auth:AuthService,
    ) { }
    
  ngOnInit() {
    // this.displayItems=true;
    // this.displayCartItems=false;
    // this.displayAdminScreen=false;
    this.isUserLoggedIn=this.auth.isUserRegistered;

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


  toLoginPage(){
    this.router.navigate(['/login']);
  }

  logOut(){
    this.auth.isUserRegistered=false;
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.dataShare.sendPageSizeData.next(this.pageSize);
    this.dataShare.sendPageIndexData.next(this.pageIndex);
   
    // console.log( this.length);
    // console.log( this.pageSize);
    // console.log(this.pageIndex)
  }

 




  

}
