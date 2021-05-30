import { Injectable } from '@angular/core';
import { ConfigService } from '../../../core/http/config/config.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private config: ConfigService,
    private firestore: AngularFirestore,
  ) { }

  post(collection, data) {
    return this.firestore.collection(collection).doc().set(data);
  }

  getAll(collection) {
    let data = [];

    this.firestore.collection(collection).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data() as {}
        });
      });
    });

    return new Observable((observer) => {
      observer.next(data);
    });
  }

  getSingle(collection, id) {
    let data = {};

    return new Observable((observer) => {
      this.firestore.collection(collection).doc(id).get().subscribe(res => {
        data = {
          id: res.id,
          ...res.data() as {}
        }
        
        observer.next(data);
      })
    });
  }

  put(collection, id, data) {
    return this.firestore.collection(collection).doc(id).update(data);
  }

  delete(collection, id) {
    return this.firestore.collection(collection).doc(id).delete();
  }
  
  getWithQuery(collection, key, operator, matchingValue) {
    let data = this.firestore.collection(collection, ref => 
      ref.where(key, operator, matchingValue)
    )

    return new Observable((observer) => {
      observer.next(data);
    });
  }

}
