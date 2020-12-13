import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    <div class="component">Component</div>
  `,
  styles: [
  ]
})
export class ChildOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
