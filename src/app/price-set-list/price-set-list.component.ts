import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Observable } from 'rxjs/Observable';
import { IPriceSet } from '../shared/interfaces/priceset';
import { AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-price-set-list',
  templateUrl: './price-set-list.component.html',
  styleUrls: ['./price-set-list.component.scss']
})
export class PriceSetListComponent implements OnInit {

  public pricesets: Observable<IPriceSet[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.pricesets = this.dataService.getPriceSets();
  }

  public changeStatus(p: IPriceSet, status: string) {
    const priceSetDoc: AngularFirestoreDocument<IPriceSet> = this.dataService.getPriceSetDoc(p.id);
    p.status = status;
    delete p.id;
    priceSetDoc.update(p);
  }

  public clone(p: IPriceSet) {
    const priceSetCollection: AngularFirestoreCollection<IPriceSet> = this.dataService.getPriceSetCollection();
    priceSetCollection.add(p);
  }

}
