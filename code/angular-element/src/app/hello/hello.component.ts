import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p (dblclick)="clicked.emit(name)">
      hello, {{name}}!
    </p>
    <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class HelloComponent {

  @Input() name
  @Output() clicked = new EventEmitter();
}
