import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { startups } from '../interFaces/startUps';


@Injectable({
  providedIn: 'root'
})
export class StartupsService {
  startupCollection!: AngularFirestoreCollection<startups>;
  
  
  constructor(private startUps: AngularFirestore) {
    this.startupCollection=this.startUps.collection('dataTest');
   }
  getStartups() : Observable<startups[]> {

    return this.startupCollection.valueChanges({"idField":'uid'});
  
  }
  getStartupById(id: string) {

    return this.startupCollection.doc(id).valueChanges();
  }

  getStartupsFilter(sectorF: string): Observable<startups[]>{return this.startUps.collection<startups>('dataTest', ref => ref.where('sector', '==', sectorF )).valueChanges({"idField":'uid'});}
}
