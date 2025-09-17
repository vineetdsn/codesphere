import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amtseparator'
})
export class AmtseparatorPipe implements PipeTransform {

  transform(value: number | string): string {
    let num = value + '';

    return num.replace();
  }

}
