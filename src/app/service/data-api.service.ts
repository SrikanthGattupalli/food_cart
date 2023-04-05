import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http:HttpClient) { }


  // getTotalItems(){
  //   return this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/0.json').subscribe((data:any)=>{
  //     console.log(data);
  //     console.log('hello')
  //   })
  // }

  postBreakFastData(item:any,cost:any,url:any,cusine:any){
    this.http.post('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/breakfast.json',{item,cost,url,cusine}).subscribe((data:any)=>{
      console.log(data);
    })
  }

  postlunchData(item:any,cost:any,url:any,cusine:any){
    this.http.post('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/lunch.json',{item,cost,url,cusine}).subscribe((data:any)=>{
      console.log(data);
    })
  }

  postDesertData(item:any,cost:any,url:any,cusine:any){
    this.http.post('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/desert.json',{item,cost,url,cusine}).subscribe((data:any)=>{
      console.log(data);
    })
  }

  postSnacksData(item:any,cost:any,url:any,cusine:any){
    this.http.post('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/snacks.json',{item,cost,url,cusine}).subscribe((data:any)=>{
      console.log(data);
    })
  }

  postBeverages(item:any,cost:any,url:any,cusine:any){
    this.http.post('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/beverages.json',{item,cost,url,cusine}).subscribe((data:any)=>{
      console.log(data);
    })

  }

  postRestaurants(url:any){
    this.http.post('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/restuarants.json',{url}).subscribe();
  }

  getRestaurants(){
    return this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/restuarants.json');
  }

  getBreakFastData(){
   return this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/breakfast.json');
  }

  getLunchData(){
    return this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/lunch.json');
  }

  getSnacksData(){
    return this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/snacks.json');
  }

  getBeveragesData(){
    return this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/beverages.json');
  }

  getDesertData(){
    return this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/desert.json');
  }

  PostCartData(item:any,cost:any,url:any,cusine:any){
    this.http.post('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/cart.json',{item,cost,url,cusine}).subscribe();

  }
  
  getCartData(){
   return  this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/cart.json');
  }

  removeCartItem(id:any){
    return this.http.delete('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/cart/'+id+'.json').subscribe();
  }

  postNotificationsData(item: any) {
    this.http.post('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/notifications.json',{item}).subscribe();

  }

  async getNotificationsData(){
    const data=await firstValueFrom( this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/notifications.json'));
  //  return this.http.get('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/notifications.json');
  return data;

  }

  deleteAllNotificationsData(){
    return this.http.delete('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/notifications.json').subscribe();
  }

  deleteSingleNotification(id:any){
    return this.http.delete('https://angular-practice-7f1b3-default-rtdb.firebaseio.com/notifications/'+id+'.json').subscribe();

  }




}
