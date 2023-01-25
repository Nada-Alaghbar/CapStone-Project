import { Component, OnInit } from '@angular/core';
import { StartupsService } from 'src/app/lib/services/startups.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
startupsInfo:any;
startupsData: any;
  constructor (private startupService:StartupsService) {

}
  ngOnInit(): void {
    this.getInfo()
  }
getInfo(){
  this.startupService.getStartups().subscribe((Response)=>{
    this.startupsInfo=Response;
  })
}

getData(id:any){
  this.startupService.getStartupById(id).subscribe((Response)=>{
    this.startupsData=Response;
  })
}

}
