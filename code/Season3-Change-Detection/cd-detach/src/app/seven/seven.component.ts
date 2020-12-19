import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-seven',
  template: `
  {{cdCheck()}}
     <a>Cmp7</a>
  `,
  styles: [
  ]
})
export class SevenComponent {

  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight(this.el);
  }
}
