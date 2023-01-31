import { Component } from '@angular/core';
import { startups } from 'src/app/lib/interFaces/startUps';
import { RequestService } from 'src/app/lib/services/request.service';
import { StartupsService } from 'src/app/lib/services/startups.service';
import { StorageService } from 'src/app/lib/services/storage.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  startupsData:startups={companyName:' '};
  imgURL?:string;

  constructor(private RequestService:RequestService,private storageServices:StorageService){}

  add(data:any){
 this.RequestService.addRQ({...this.startupsData,logo:this.imgURL}).subscribe(()=>{alert("The request has been sent successfully");window.location.reload()})
}

upload(event: Event) { 
    let file = (event.target as HTMLInputElement)?.files?.[0];if (file) {this.storageServices.uploadimage(file).subscribe((value) => {
    this.imgURL = value;});} }
}
