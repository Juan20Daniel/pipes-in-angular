import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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

@Component({
  selector: 'app-uncommon-page',
  imports: [ CardComponent, I18nSelectPipe ],
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
}
