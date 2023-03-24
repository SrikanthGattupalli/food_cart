import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataApiService } from '../service/data-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  jsonForm:FormGroup;
  breakFast:object;
  constructor( private router:Router,private dataApi:DataApiService) {
    
  }
  ngOnInit() {
    this.jsonForm=new FormGroup({
      'type':new FormControl(null),
      'item':new FormControl(null),
      'cost':new FormControl(null),
      'url':new FormControl(null),
      'cuisine':new FormControl(null)
    })
    
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

  onSubmit(){
    console.log(this.jsonForm.value.type)
    if(this.jsonForm.value.type==1){
      this.dataApi.postBreakFastData(this.jsonForm.value.item,this.jsonForm.value.cost,this.jsonForm.value.url,this.jsonForm.value.cuisine);
    }else if(this.jsonForm.value.type==2){
      console.log(this.jsonForm.value.type);
      this.dataApi.postlunchData(this.jsonForm.value.item,this.jsonForm.value.cost,this.jsonForm.value.url,this.jsonForm.value.cuisine);
    }else if(this.jsonForm.value.type==3){
      this.dataApi.postDesertData(this.jsonForm.value.item,this.jsonForm.value.cost,this.jsonForm.value.url,this.jsonForm.value.cuisine);
    }else if(this.jsonForm.value.type==4){
      this.dataApi.postSnacksData(this.jsonForm.value.item,this.jsonForm.value.cost,this.jsonForm.value.url,this.jsonForm.value.cuisine);
    }else if(this.jsonForm.value.type==5){
      this.dataApi.postBeverages(this.jsonForm.value.item,this.jsonForm.value.cost,this.jsonForm.value.url,this.jsonForm.value.cuisine);
    }

    this.jsonForm.reset();
  
  }

  // decision(value:any){
  //   if(value==1){
  //     return 'breakfast';
  //   }else if (value==2){
  //     return 'lunch';
  //   }else if(value==3){
  //     return 'desert';
  //   }else if(value==4){
  //     return'snacks';
  //   }else if(value==5){
  //     ret
  //   }
  //   return 'other';
  // }

  dec(){
   this.dataApi.postRestaurants(this.jsonForm.value.url);
   console.log(this.jsonForm)
   
  }





}
