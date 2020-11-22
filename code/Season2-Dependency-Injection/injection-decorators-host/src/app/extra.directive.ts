import { Directive, Host, Optional, Self } from '@angular/core';
import { FlowerService } from './flower.service';

@Directive({
  selector: '[extra]',
})
export class ExtraDirective {

  constructor(@Optional() @Host() flower: FlowerService) { 
    console.log(flower?.emoji);
  }

}
