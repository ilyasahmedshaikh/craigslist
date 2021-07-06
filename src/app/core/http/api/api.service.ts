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
    let data = [];

    return new Observable((observer) => {
      this.firestore.collection(collection, ref => ref.where(key, operator, matchingValue)).get().subscribe(res => {    
        res.forEach(i => {
          data.push({
            id: i.id,
            ...i.data() as {}
          })
        });

        observer.next(data);
      })
    });
  }

  formatDataListing(res) {
    let data = Object.entries(res);
    let formatted = [];  

    data.forEach(item => {
      formatted.push({
        Id: item[0],
        ...item[1] as {}
      })
    });

    return formatted.reverse();
  }

}
