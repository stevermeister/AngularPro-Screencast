import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  template: `
    <div class="component">Component</div>
  `,
  styles: [
  ]
})
export class ChildTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
