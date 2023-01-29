import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { last, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) { }
 uploadimage(file: File) { const filePath = `logos/${file.name}`; const storageRef = this.storage.ref(filePath);return storageRef.put(file).snapshotChanges().pipe( last(),switchMap((val) => {return storageRef.getDownloadURL();}) );}
}
