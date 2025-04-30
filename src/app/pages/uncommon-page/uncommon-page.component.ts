import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Carlos',
  gender: 'male',
  age: 30,
  address: 'Ottawa yo ko sama'
}
const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 32,
  address: 'Las joyas de guadalajara'
}

// Pipes de internasionalización
// I18nSelectPipe, I18nPluralPipe

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.component.html'
})
export default class UncommonPageComponent {
  // i18nSelect
  client = signal(client1);

  invitationMap = {
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient() {
    if(this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  clientsMap = signal({
    '=0':'no tenemos nungún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    other:'tenemos # clientes esperando'
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Marco',
    'Melisso',
    'Fernando',
    'Natalia',
    'Andrea'
  ]);
  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  // KeyValuePipe

  profile = {
    name:'Fernanflow',
    age:2,
    address: 'Ottawa yo keni chawa'
  }

  // AsyncPipe
  promiseValue:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Giuston tenemos un problema');
      console.log('promesa finalizada')
    },3500)
  });

  myObservableTimer = interval(1000).pipe(
    tap((value) => console.log('tap', value))
  )
}
