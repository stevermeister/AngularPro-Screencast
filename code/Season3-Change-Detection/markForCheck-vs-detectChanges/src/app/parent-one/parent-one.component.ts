import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  template: `
    <div class="component">Component</div>
    <app-child-one></app-child-one>
    <app-child-two></app-child-two>
  `,
  styles: [
  ]
})
export class ParentOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
