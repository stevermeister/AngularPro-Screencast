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
export class GreetingsComponent {
  // @Input() name;

  constructor(@Attribute('name') public name) {
    console.log(name);

  }
}
