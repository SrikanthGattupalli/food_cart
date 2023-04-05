import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataApiService } from './data-api.service';
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
addToCartPressed=new BehaviorSubject<Event>(null);
sendPageSizeData=new BehaviorSubject<number>(null);
sendPageIndexData=new BehaviorSubject<number>(null);
paginationPageSizeClicked=new BehaviorSubject<Event>(null);
searchItemClicked=new BehaviorSubject<Event>(null);
searchedText=new BehaviorSubject<string>(null);
cancelSearched=new BehaviorSubject<Event>(null);
mealSelected=new BehaviorSubject<string>(null);
mealFilterClicked=new BehaviorSubject<Event>(null);
sortSelected=new BehaviorSubject<string>(null);



  cartDataDataSharing:any[]=[];
  cartObjectDataSharing:Object={id:'',item:'',cost:'',url:'',cusine:''};
  totalCostDataSharing:number=0;
  CartDataPresentDataSharing=true;
  noCartDataDataSharing:boolean=false;
  cartItemsCountDataSharing:number=0;
  SearchedWord:string='';
  mealClicked:string='';


  constructor( private router:Router,
    private dataApi:DataApiService
    ) { }

    displayCartData(){
      this.dataApi.getCartData().subscribe((data:any)=>{
        console.log(data);
        
        if(data === undefined || data === null){
          this.CartDataPresentDataSharing=false;
          this.noCartDataDataSharing=true;
          
  
        }else {
          let key=Object.keys(data);
        console.log(key.length)
        let arr=[];
        arr.push(data);
        this.cartItemsCountDataSharing=key.length;
        for(let i=0;i<key.length;i++){
          this.cartDataDataSharing.push({id:key[i],item:arr[0][key[i]]["item"],cost:arr[0][key[i]]["cost"],cusine:arr[0][key[i]]["cusine"],url:arr[0][key[i]]["url"]});
          let itemCost= parseInt(arr[0][key[i]]["cost"]);
          // console.log(itemCost+1);
          this.totalCostDataSharing+=itemCost;
          // console.log(arr[0][key[i]]["cost"])
        }
          
        }
       
        console.log(this.noCartDataDataSharing);
  
        
      })
    }
  

  
}
