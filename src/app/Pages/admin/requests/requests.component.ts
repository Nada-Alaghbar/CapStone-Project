import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/lib/services/request.service';
import { SectorsService } from 'src/app/lib/services/sectors.service';
import { StartupsService } from 'src/app/lib/services/startups.service';
import { StorageService } from 'src/app/lib/services/storage.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  startupsInfo:any;
  startupsData: any;
  imgURL?:string;
  hide?:boolean=false;
  id:any;

    constructor (private RequestService:RequestService,private router: Router      
      ) {
  
  }
    ngOnInit(): void {
      this.getInfo();
    }

  getInfo(){
    this.RequestService.getReq().subscribe((Response)=>{
      this.startupsInfo=Response;
         
    })
  }
  
  getData(id:any){
    this.RequestService.getStartupById(id).subscribe((Response)=>{
      this.startupsData=Response;
      this.id=id;

    })
  }
 
    Accept(){
      this.RequestService.approveRequest(this.id,this.startupsData)
    }

    delST(){
this.RequestService.deleteRequest(this.id)
    }
}