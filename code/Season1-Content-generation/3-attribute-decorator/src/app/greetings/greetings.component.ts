import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  template: `
    <p>
      Hello, {{name}}!
    </p>
  `,
  styles: [
  ]
})
export class GreetingsComponent implements OnInit{
  // @Input() name;

  constructor(@Attribute('name') public name) {

  }

  ngOnInit() {
    console.log(this.name);
  }
}
