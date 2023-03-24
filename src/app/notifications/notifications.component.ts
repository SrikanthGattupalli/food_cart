import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../service/data-api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notification:Object={id:'',item:''};
  notificationData:any[]=[];
  constructor(private dataApi:DataApiService){

  }
  ngOnInit(): void {
   this.displayNotificationData();
  }

  displayNotificationData(){
    this.dataApi.getNotificationsData().subscribe((data:any )=>{
      console.log(data);
      let keys1=Object.keys(data);
      for(let i=0;i<keys1.length;i++){
       console.log(data[keys1[i]]);
       this.notificationData.push({id:keys1[i],item:data[keys1[i]]["item"]});

      }
      console.log(this.notificationData)
    })

  }

}
