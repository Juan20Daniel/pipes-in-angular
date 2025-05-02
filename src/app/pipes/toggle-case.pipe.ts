import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, transform:boolean=true): string {
    if(!transform) return value.toLowerCase();
    return value.toUpperCase();
  }

}
