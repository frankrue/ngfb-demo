import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IPriceSet } from '../interfaces/priceset';

@Injectable()
export class DataService {

  constructor(
    private db: AngularFirestore
  ) {}

  public getPriceSets(): Observable<IPriceSet[]> {
    return this.db.collection('pricesets').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as IPriceSet;
          data.id = a.payload.doc.id;
          return data;
        });
      });
  }

  public getPriceSet(id): Observable<IPriceSet> {
    return this.db.doc(`pricesets/${id}`).snapshotChanges()
      .map(a => {
        const data = a.payload.data() as IPriceSet;
        data.id = a.payload.id;
        return data;
      });
  }

  public getPriceSetDoc(id): AngularFirestoreDocument<IPriceSet> {
    return this.db.doc(`pricesets/${id}`);
  }

  public getPriceSetCollection(): AngularFirestoreCollection<IPriceSet> {
    return this.db.collection(`pricesets`);
  }

}

