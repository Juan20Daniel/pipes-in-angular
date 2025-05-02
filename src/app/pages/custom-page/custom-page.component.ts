import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlayPipe } from '../../pipes/can-flay.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { I18nSelectPipe, TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlayPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    TitleCasePipe,
    HeroFilterPipe,
    I18nSelectPipe
  ],
  templateUrl: './custom-page.component.html'
})
export default class CustomPageComponent {
  name = signal('Juan Daniel');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

  heroMap = {
    name: 'Ordenando por nombre',
    canFly: 'Ordenando quien puede volar',
    creator: 'Ordenado por creador',
    color: 'Ordenado por color',
  }

}
