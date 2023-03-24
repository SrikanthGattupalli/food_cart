import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../service/data-api.service';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
  cartData:any[]=[];
  cartObject:Object={id:'',item:'',cost:'',url:'',cusine:''};
  totalCost:number=0;
  CartDataPresent=true;
  noCartData:boolean=false;
  cartItemsCount:number=0;

  constructor( private router:Router,
    private dataApi:DataApiService
    ,private  dataShare:DataSharingService) {
    
  }
  ngOnInit(): void {
    this.displayCartData();
  }

  onClickCart(){
   
    
    this.router.navigate(['/cart']);

  }

  onClickHome(){
   
    this.router.navigate(['/home']);
  }

  onClickAdmin(){
    this.router.navigate(['/admin']);
  }

  displayCartData(){
    this.dataApi.getCartData().subscribe((data:any)=>{
      console.log(data);
      
      if(data === undefined || data === null){
        this.CartDataPresent=false;
        this.noCartData=true;
        

      }else {
        let key=Object.keys(data);
      console.log(key.length)
      let arr=[];
      arr.push(data);
      this.cartItemsCount=key.length;
      for(let i=0;i<key.length;i++){
        this.cartData.push({id:key[i],item:arr[0][key[i]]["item"],cost:arr[0][key[i]]["cost"],cusine:arr[0][key[i]]["cusine"],url:arr[0][key[i]]["url"]});
        let itemCost= parseInt(arr[0][key[i]]["cost"]);
        // console.log(itemCost+1);
        this.totalCost+=itemCost;
        // console.log(arr[0][key[i]]["cost"])
      }
        
      }
     
      console.log(this.noCartData);

      
    })
  }

  deleteCartItem(id: any){
    this.dataApi.removeCartItem(id);
    this.cartData=[];
    this.totalCost=0;
    setTimeout(()=>{
      this.displayCartData();
      this.dataShare.displayCartData();
      

    },1000);
    

   

  }

  

  
}

  



