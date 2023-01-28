import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { sectors } from 'src/app/lib/interFaces/sectors';
import { SectorsService } from 'src/app/lib/services/sectors.service';
import { StartupsService } from 'src/app/lib/services/startups.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  startupsInfo:any;
  startupsData: any;
  sectorsName:any;
  valueSec:any;

    constructor (private startupService:StartupsService,private fireAuth: AngularFireAuth,private router: Router, private sector:SectorsService
      
      
      
      ) {
  
  }
    ngOnInit(): void {
      this.getInfo();
      this.getNameSectors();
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
  getNameSectors(){
    this.sector.getSectors().subscribe((Response)=>{
      this.sectorsName=Response; console.log(this.sectorsName)
    })
  }
  
  logOut() {this.fireAuth.signOut();this.router.navigate(['/']);}

  getValue(event:any){
this.valueSec=event.target.innerText;
// if (this.valueSec== 'All Sectors') { this.startupsInfo = this.startupService.getStartups().subscribe((response) => {this.startupsInfo = response;console.log(this.startupsInfo);});}
this.startupsInfo=this.startupService.getStartupsFilter(this.valueSec).subscribe((Response)=>{this.startupsInfo=Response})
  }
  getAll(event:any){
    this.valueSec=event.target.innerText;
    if (this.valueSec== 'All Sectors') { this.startupsInfo = this.startupService.getStartups().subscribe((response) => {this.startupsInfo = response;console.log(this.startupsInfo);});}
  }
}
