import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../service/data-api.service';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.css']
})
export class RestaurentsComponent implements OnInit {
arr3d:any[][]=[];
rows:number;
columns:number;
  constructor(private dataApi: DataApiService){}

  ngOnInit() {
  //  this.getRestuarantsLogoData()
  }

  // getRestuarantsLogoData(){
  //   this.dataApi.getRestaurants().subscribe((data:any)=>{
  //    let restuarantKeys=Object.keys(data)
  //    this.columns=5;
  //    this.rows=Math.round(restuarantKeys.length/this.columns);

  //    let urlArray=[];
  //    for(let i=0;i<restuarantKeys.length;i++){
  //     urlArray.push(data[restuarantKeys[0]].url);
  //    }
  //    console.log(urlArray);
  //   for(let i=0;i<this.rows;i++){
  //     for(let j=0;j<this.columns;j++){
  //       this.arr3d[i][j].push(0);
  //     }
  //   }

     
  //   //  console.log(this.arr3d[0][0])

      
  //   })
  // }

}
