import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-greetings name="John"></app-greetings>
    <app-greetings name="Alice"></app-greetings>
    <app-greetings name="Bob"></app-greetings>
    <app-greetings [name]="stranger"></app-greetings>
  `,
  styles: []
})
export class AppComponent {
  stranger = 'Somename'

  constructor() {
    setInterval(_ => {
      this.stranger = 'Somename' + Math.random();
    }, 500);
  }
}
