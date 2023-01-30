import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { sectors } from 'src/app/lib/interFaces/sectors';
import { SectorsService } from 'src/app/lib/services/sectors.service';
import { StartupsService } from 'src/app/lib/services/startups.service';
import { StorageService } from 'src/app/lib/services/storage.service';

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
  imgURL?:string;
  hide?:boolean=false;
  id:any;

    constructor (private startupService:StartupsService,private fireAuth: AngularFireAuth,private router: Router, private sector:SectorsService, private storageServices:StorageService
      

      
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
      this.id=id;

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

  upload(event: Event) { 
    let file = (event.target as HTMLInputElement)?.files?.[0];if (file) {this.storageServices.uploadimage(file).subscribe((value) => {
    this.imgURL = value;this.hide = true;});} }


    Update(data:any){
      if(this.imgURL){this.startupService.updateStartup(this.id,{...data,logo:this.imgURL})} 
      else{this.startupService.updateStartup(this.id,{...data,logo:this.startupsData.logo})}
    }

    delST(){
      this.startupService.deleteStartup(this.id)

    }

}
