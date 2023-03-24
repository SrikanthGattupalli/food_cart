import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 

  constructor(private router: Router,
    private api:DataApiService,
    private dataShare:DataSharingService) { }
  ngOnInit() {
    // this.displayItems=true;
    // this.displayCartItems=false;
    // this.displayAdminScreen=false;

    this.getBreakfastDataOut();
    this.getLunchData();
    this.getSnacksData();
    this. getBevaragesData();
    
    
  }

  getBreakfastDataOut(){
    this.api.getBreakFastData().subscribe((data:any)=>{
      // console.log(data);
      let key=Object.keys(data);
      let arr=[];
      arr.push(data);
      for(let i=0;i<key.length;i++){
        this.FullItemsData.push(arr[0][key[i]]);
      }
      console.log(this.FullItemsData[0]);
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

    })
  }

  getBevaragesData(){
    this.api.getBeveragesData().subscribe((data:any)=>{
      let key=Object.keys(data);
      let arr=[];
      arr.push(data);
      for(let i=0;i<key.length;i++){
        this.FullItemsData.push(arr[0][key[i]]);
      }

      console.log()

    })
  }

  addToCart(item:any,cost:any,url:any,cusine:any,e:Event) {

    this.api.PostCartData(item,cost,url,cusine);
    // adding to notifications
    this.api.postNotificationsData(item);
    // console.log(item,cost,url,cusine)
    this.dataShare.displayCartData();
    this.dataShare.addToCartPressed.next(e);
  }

}
