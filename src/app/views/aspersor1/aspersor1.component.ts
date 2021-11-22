import { Component, OnDestroy, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aspersor1',
  templateUrl: './aspersor1.component.html',
  styleUrls: ['./aspersor1.component.scss']
})
export class Aspersor1Component implements OnInit, OnDestroy {

  aspersor1Subscription!: Subscription;

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.getDataAspersor1();
  }

  getDataAspersor1() {
    const coleccion = collection(this.firestore, 'aspersor_1');
    const data = collectionData(coleccion);
    this.aspersor1Subscription = data.subscribe(data => {
      console.log(data);
    })
  }

  ngOnDestroy() {
    this.aspersor1Subscription.unsubscribe();
  }

}
