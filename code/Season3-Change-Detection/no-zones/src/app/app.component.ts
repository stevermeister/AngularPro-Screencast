import { ApplicationRef, Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
   <input (input)="text=$event.target.value">
   <h1>{{text}}</h1>
  `
})
export class AppComponent {
  text = 'no-zones';
  constructor(app: ApplicationRef) {
    interval(50).subscribe(_ => {
      app.tick();
    })
  }
}
