import { Component, OnDestroy, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, updateDoc, doc } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AspersorModel } from 'src/app/models/aspersor_model';

@Component({
  selector: 'app-aspersor2',
  templateUrl: './aspersor2.component.html',
  styleUrls: ['./aspersor2.component.scss']
})
export class Aspersor2Component implements OnInit,OnDestroy {

  aspersor1Subscription!: Subscription;
  status_1Subscription!: Subscription;

  dataAspersor!: AspersorModel[];
  estado_1!: boolean;
  automatico_1!: boolean;
  lastHumedad!: number;
  lastTemperatura!: number;


  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.getDataAspersor1();
    this.getStatus1();
  }

  getDataAspersor1() {
    const coleccion = collection(this.firestore, 'aspersor_2');
    const data = collectionData(coleccion);
    this.aspersor1Subscription = data.subscribe(data => {
      this.dataAspersor = (data as AspersorModel[]);
      const [ last ] = this.dataAspersor.slice(-1);
      this.lastTemperatura = last.temperatura;
      this.lastHumedad = last.humedad;
    })
  }


  getStatus1() {
    const coleccion = collection(this.firestore, 'status_2');
    const data = collectionData(coleccion);
    this.status_1Subscription = data.subscribe(data => {
      this.estado_1 = (data[0].estado == 'Encendido') ? true : false;
      this.automatico_1 = data[0].automatico;
    })
  }

  setEstado1(event: any) {
    this.estado_1 = event.checked;
    const document = doc(this.firestore, 'status_2/2')
    updateDoc(document, {
      automatico: this.automatico_1,
      estado: this.estado_1 ? 'Encendido' : 'Apagado'
    });
  }

  setAutomatico1(event: any) {
    this.automatico_1 = event.checked;
    const document = doc(this.firestore, 'status_2/2')
    updateDoc(document, {
      automatico: this.automatico_1,
      estado: this.estado_1 ? 'Encendido' : 'Apagado'
    });
  }

  ngOnDestroy() {
    this.aspersor1Subscription.unsubscribe();
    this.status_1Subscription.unsubscribe();
  }


}
