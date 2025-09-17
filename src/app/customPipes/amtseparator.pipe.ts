import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amtseparator'
})
export class AmtseparatorPipe implements PipeTransform {

  transform(value: number | string): string {
    let num = value + '';
    console.log("hi")

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
  }

}
