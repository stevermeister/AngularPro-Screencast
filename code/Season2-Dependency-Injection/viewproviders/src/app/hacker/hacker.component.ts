import { Component, Optional } from '@angular/core';
import { InnerLogicService } from '../carousel/inner-logic.service';

@Component({
  selector: 'hacker',
  template: `<div>😈</div>`,
  styles: [
  ]
})
export class HackerComponent {

  constructor(@Optional() innerLogic: InnerLogicService) {
    if(innerLogic) {
      innerLogic.timer = 100;
    }
  }
}
