import { Injectable } from '@angular/core';
import { ConfigService } from '../../../core/http/config/config.service'
import { AngularFirestore } from '@angular/fire/firestore';

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

    return data;
  }

  getSingle(collection, id) {
    return this.firestore.collection(collection).doc(id).get();
  }

  put(collection, id, data) {
    return this.firestore.collection(collection).doc(id).update(data);
  }

  delete(collection, id) {
    return this.firestore.collection(collection).doc(id).delete();
  }

}
