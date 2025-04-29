import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es'|'fr'|'en';

function formatLocale(locale:string):AvailableLocale {
  const validLocale: Record<string, AvailableLocale> = {
    es:'es',
    fr:'fr',
    en:'en'
  }
  return validLocale[locale]??'en';
}

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private currentLocale = signal<AvailableLocale>('fr');

  constructor() {
    this.currentLocale.set(formatLocale(localStorage.getItem('locale')??'es'))
  }

  get getLocale() {
    return this.currentLocale()
  }

  changeLocale(locale:AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
