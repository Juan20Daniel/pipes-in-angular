import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlay'
})
export class CanFlayPipe implements PipeTransform {

  transform(canFlay:boolean): string {
    return canFlay ? 'Puede volar' : 'No puede volar';
  }

}
