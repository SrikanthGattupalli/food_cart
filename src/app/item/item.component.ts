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
  searchedWord:any;
  noItemsAvailable:boolean=false;
  meal:string='';
  sortBy:string='';
 

  constructor(private router: Router,
    private api:DataApiService,
    private dataShare:DataSharingService,
    private authentication:AuthService) { }
  ngOnInit() {
    // this.displayItems=true;
    // this.displayCartItems=false;
    // this.displayAdminScreen=false;
    this.FullItemsData=[];


    // this.getBreakfastDataOut();
    // this.getLunchData();
    // this.getSnacksData();
    // this.getBevaragesData();
    // this.getDesertData();
    console.log(this.FullItemsData);
    // console.log(this.FullItemsData[0]["cost"]);

    // this.dataShare.sendPageSizeData.subscribe((data:any)=>{
    //   // console.log(data);
    //   // this.pageSize=data;
    // })

    // this.setPageSize(this.pageSize);
    // this.paginatedData=this.FullItemsData.slice(0,12);
    // // console.log(this.paginatedData);

    this.dataShare.searchedText.subscribe((data:any)=>{
      this.searchedWord=data;
    })

    this.dataShare.searchItemClicked.subscribe((e:any)=>{
      // console.log(this.searchedWord);
      
      // this.gettingDataOut();
      this.search(this.searchedWord);
      console.log(this.searchedWord);
      
    })


    this.dataShare.cancelSearched.subscribe((e:any)=>{
      console.log('pressed');
      this.FullItemsData=[];
      this.cancelSearchedData();
      this.gettingDataOut();

    });

    this.dataShare.mealFilterClicked.subscribe(e=>{
      // this.applyMealFilter();

    })

    this.dataShare.mealSelected.subscribe(meal=>{
      this.meal=meal;
      console.log(meal);
      this.applyMealFilter();
    })


    this.dataShare.sortSelected.subscribe(data=>{
      this.sortBy=data;
      this.sortByType();
    
      console.log(this.sortBy);


    })




    // setTimeout(()=>{
    //   console.log(this.FullItemsData)

    // },1000)
    
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
      // console.log(this.FullItemsData.length);

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

  getDesertData(){
    this.api.getDesertData().subscribe((data:any)=>{
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

 gettingDataOut(){
 
  this.getBreakfastDataOut();
  this.getLunchData();
  this.getSnacksData();
  this.getBevaragesData();
  this.getDesertData();
  

 }

  search(text:any){
    // console.log(this.FullItemsData[2]["item"]);
  
    for(let i=0;i<this.FullItemsData.length;i++){
      if(text==this.FullItemsData[i]["item"]){
        console.log(this.FullItemsData[i]);
        let arr=[];
         arr=this.FullItemsData[i];
        console.log(arr)
        this.FullItemsData=[];
        this.FullItemsData.push(arr);
        console.log(this.FullItemsData);
        this.noItemsAvailable=false;
      //  this. noItemsPresent()
        
      }
    }
  
  }

  // noItemsPresent(){
  //   if(this.FullItemsData.length==0){
  //     this.noItemsAvailable=true;
  //   }

  // }

  cancelSearchedData(){
    this.FullItemsData=[];
  
  }


  applyMealFilter(){
    this.FullItemsData=[];
   if(this.meal=='breakfast'){
    
    this.getBreakfastDataOut();
    console.log(this.FullItemsData)
   }else if(this.meal=='lunch'){
   
    this.getLunchData();
    console.log(this.FullItemsData)
   }else if(this.meal=='snacks'){
    this.FullItemsData=[];
    this.getSnacksData();
    console.log(this.FullItemsData)
   }else if(this.meal=='bevarages'){
    this.FullItemsData=[];
    this.getBevaragesData();
    console.log(this.FullItemsData)
   }else if(this.meal=='deserts'){
    this.FullItemsData=[];
    this.getDesertData();
    console.log(this.FullItemsData)
   }else if(this.meal=='all'){
    this.FullItemsData=[];
    this.getBreakfastDataOut();
    this.getLunchData();
    this.getSnacksData();
    this.getDesertData();
    this.getBevaragesData();
   }
    
  }

  sortByType(){

    if(this.sortBy=='name'){
      console.log(this.FullItemsData);
      let items = this.FullItemsData.sort((p1, p2) => (p1.item> p2.item) ? 1 : (p1.item < p2.item) ? -1 : 0);
      
      
    }else if(this.sortBy=='price'){
      this.FullItemsData.sort((p1, p2) => (parseInt( p1.cost)> parseInt( p2.cost)) ? 1 :  (parseInt( p1.cost)< parseInt( p2.cost)) ? -1 : 0);

    }

  }



  

}