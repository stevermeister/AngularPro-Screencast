import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[colory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  @HostBinding('style.color') color = 'red';

  public setColor(color) {
    this.color = color;
  }

}
