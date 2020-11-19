import { Directive } from '@angular/core';
import { FlowerService } from './flower.service';

@Directive({
  selector: '[extra]',
  providers: [{ provide: FlowerService, useValue: { emoji: "🌺" } }],
})
export class ExtraDirective {

  constructor() { 
    console.log('initialized')
  }

}
