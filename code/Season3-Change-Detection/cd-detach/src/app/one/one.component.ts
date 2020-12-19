import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-one',
  template: `
        {{cdCheck()}}
        <a>Cmp1</a>
        <ul>
          <li>
              <app-two></app-two>
          </li>
          <li>
              <app-three></app-three>
          </li>
        </ul>
  `
})
export class OneComponent {

  constructor(private el: ElementRef) {}

  cdCheck() {
    hightlight(this.el);
  }

}
