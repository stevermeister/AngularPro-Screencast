import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  template: `
    <div class="component">Component</div>
    <app-child-one></app-child-one>
    <app-child-two></app-child-two>
  `,
  styles: [
  ]
})
export class ParentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
