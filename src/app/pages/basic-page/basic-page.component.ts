import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { AvailableLocale, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,

    DatePipe
  ],
  templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {
  LocalService = inject(LocalService);

  nameLower = signal('juan daniel');
  nameUpper = signal('JUAN DANIEL');
  fullname = signal('Juan DaniEl');

  customDate = signal(new Date());

  tickingDate = effect((onClearup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    },1000);

    onClearup(() => {
      clearInterval(interval);
    })
  });
  changeLocale(locale:AvailableLocale) {
    console.log(locale);
    this.LocalService.changeLocale(locale);
  }
}
