import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[DateFormat]'
})
export class DateFormatDirective {

  constructor(private el: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange($event: any){
    const value = this.el.nativeElement.value;
  }
}
