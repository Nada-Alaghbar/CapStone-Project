import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { sectors } from '../interFaces/sectors';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  sectorsCollection!: AngularFirestoreCollection<sectors>;
  
  
  constructor(private startUps: AngularFirestore) {
    this.sectorsCollection=this.startUps.collection('Sectors');
   }
  getSectors() : Observable<sectors[]> {

    return this.sectorsCollection.valueChanges({"idField":'uid'});
  
  }
  // getStartupById(id: string) {

  //   return this.sectorsCollection.doc(id).valueChanges();

  // }
}
