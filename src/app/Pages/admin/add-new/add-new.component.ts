import { Component } from '@angular/core';
import { startups } from 'src/app/lib/interFaces/startUps';
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

 constructor(private startupService:StartupsService,private storageServices:StorageService){}
  upload(event: Event) { 
    let file = (event.target as HTMLInputElement)?.files?.[0];if (file) {this.storageServices.uploadimage(file).subscribe((value) => {
    this.imgURL = value;this.hide = true;});} }

    add(data:any){
this.startupService.addST({...this.startupsData,logo:this.imgURL}).subscribe(()=>{alert("Done");window.location.reload()})

    }
}
