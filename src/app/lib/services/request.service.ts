import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { startups } from '../interFaces/startUps';
import { StartupsService } from './startups.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  RequestCollection!: AngularFirestoreCollection<startups>;
  
  constructor(private startUps: AngularFirestore,
    private startupService:StartupsService
    
    ) {
      this.RequestCollection=this.startUps.collection('requests');
     }


  addRQ(startup:startups){
        let addedStartup = this.RequestCollection?.add(startup);
        return from(addedStartup);
      }
      
      getReq() : Observable<startups[]> {

        return this.RequestCollection.valueChanges({"idField":'uid'});
      
      }

      getStartupById(id: string) {

        return this.RequestCollection.doc(id).valueChanges();
      }
      
      approveRequest(id: string, data: startups) {this.startupService.startupCollection.add(data); return from(this.RequestCollection.doc(id).delete());}
      
      
      deleteRequest(id: string) { return from(this.RequestCollection.doc(id).delete());}
      
      
}
