import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ColoryDirective } from './colory.directive';

@Component({
  selector: 'app-root',
  template: `
    <div colory #c="colory">
      Some text
    </div>

    <button (click)="c.setColor('green')">Change Color</button>
    
  `,
  styles: []
})
export class AppComponent{}
