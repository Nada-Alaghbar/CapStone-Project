import { Component } from '@angular/core';
import { sectors } from 'src/app/lib/interFaces/sectors';
import { startups } from 'src/app/lib/interFaces/startUps';
import { SectorsService } from 'src/app/lib/services/sectors.service';
import { StartupsService } from 'src/app/lib/services/startups.service';
import { StorageService } from 'src/app/lib/services/storage.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
  imgURL?:string;
  hide?:boolean=false;
  id:any;
  startupsData:startups={companyName:' '};
  sectorData:sectors={SecName:' '};

viewSector:boolean=false;
viewStartup:boolean=false;
viewRequest:boolean=false;

 constructor(private startupService:StartupsService,private storageServices:StorageService,private sectorservice:SectorsService){}

  upload(event: Event) { 
    let file = (event.target as HTMLInputElement)?.files?.[0];if (file) {this.storageServices.uploadimage(file).subscribe((value) => {
    this.imgURL = value;this.hide = true;});} }

    add(data:any){
this.startupService.addST({...this.startupsData,logo:this.imgURL}).subscribe(()=>{alert("New Startup has been added successfully");window.location.reload()})

    }
    submit() {this.sectorservice .addSector({...this.sectorData} as sectors) .subscribe((_) =>window.location.reload()); }
    
viewSec(){
  this.viewSector=true;
  this.viewRequest=false;
  this.viewStartup=false;
}

viewST(){
  this.viewSector=false;
  this.viewRequest=false;
  this.viewStartup=true;
}

viewReq(){
  this.viewSector=false;
  this.viewRequest=true;
  this.viewStartup=false;
}
}
