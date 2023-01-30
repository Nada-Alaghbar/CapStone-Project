import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
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
  addSector(sector: sectors) {let addSector = this.sectorsCollection?.add(sector);return from(addSector); }
}
