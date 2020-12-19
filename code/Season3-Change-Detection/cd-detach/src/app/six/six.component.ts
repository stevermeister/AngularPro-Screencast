import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-six',
  template: `
  {{cdCheck()}}
     <a>Cmp6</a>
  `,
  styles: [
  ]
})
export class SixComponent {

  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight(this.el);
  }
}
