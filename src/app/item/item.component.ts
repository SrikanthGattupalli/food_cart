import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { DataApiService } from '../service/data-api.service';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  displayAdminScreen=false;
  FullItemsData:any[]=[];
  paginatedData:any[]=[];
  pageSize:number=12;
 

  constructor(private router: Router,
    private api:DataApiService,
    private dataShare:DataSharingService,
    private authentication:AuthService) { }
  ngOnInit() {
    // this.displayItems=true;
    // this.displayCartItems=false;
    // this.displayAdminScreen=false;

    this.getBreakfastDataOut();
    this.getLunchData();
    this.getSnacksData();
    this. getBevaragesData();
    console.log(this.FullItemsData);
    // console.log(this.FullItemsData[0]["cost"]);

    this.dataShare.sendPageSizeData.subscribe((data:any)=>{
      console.log(data);
      // this.pageSize=data;
    })

    this.setPageSize(this.pageSize);
    this.paginatedData=this.FullItemsData.slice(0,12);
    console.log(this.paginatedData);


    
    
  }

  getBreakfastDataOut(){
    this.api.getBreakFastData().subscribe((data:any)=>{
      // console.log(data[0]);
      let key=Object.keys(data);
      let arr=[];
      arr.push(data);
      for(let i=0;i<key.length;i++){
        this.FullItemsData.push(arr[0][key[i]]);
      }
      // console.log(this.FullItemsData[0]);
      // console.log(this.FullItemsData.length);
    })
  }

  getLunchData(){
    this.api.getLunchData().subscribe((data:any)=>{
      let key=Object.keys(data);
      let arr=[];
      arr.push(data);
      for(let i=0;i<key.length;i++){
        this.FullItemsData.push(arr[0][key[i]]);
      }
      //  console.log(this.FullItemsData[0]);
      //  console.log(this.FullItemsData.length);

    })
   
  }

  getSnacksData(){
    this.api.getSnacksData().subscribe((data:any)=>{
      let key=Object.keys(data);
      let arr=[];
      arr.push(data);
      for(let i=0;i<key.length;i++){
        this.FullItemsData.push(arr[0][key[i]]);
      }
      console.log(this.FullItemsData.length);

    })
    // console.log(this.FullItemsData[0]);
  }

  getBevaragesData(){
    this.api.getBeveragesData().subscribe((data:any)=>{
      let key=Object.keys(data);
      let arr=[];
      arr.push(data);
      for(let i=0;i<key.length;i++){
        this.FullItemsData.push(arr[0][key[i]]);
      }

      // console.log(this.FullItemsData.slice(0,12));
      // console.log(this.FullItemsData.length);
      // this.setPageSize(12);

    })
  }

  addToCart(item:any,cost:any,url:any,cusine:any,e:Event) {
    if(this.authentication.isUserRegistered){
      this.api.PostCartData(item,cost,url,cusine);
      // adding to notifications
      this.api.postNotificationsData(item);
      // console.log(item,cost,url,cusine)
      this.dataShare.displayCartData();
      this.dataShare.addToCartPressed.next(e);

    }else{
      this.router.navigate(['/login']);
    }

   
  }

  setPageSize(size:number){
    // this.paginatedData=
  }

  

}
