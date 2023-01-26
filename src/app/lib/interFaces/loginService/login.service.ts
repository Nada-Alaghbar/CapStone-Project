import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userState$ = this.fireAuth.authState;
  
  

  constructor(private fireAuth: AngularFireAuth, private fs: AngularFirestore) {
   }


  signIn(email:string, password: string){


    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
}
