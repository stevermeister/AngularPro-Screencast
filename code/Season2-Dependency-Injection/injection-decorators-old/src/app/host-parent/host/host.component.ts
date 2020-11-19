import { Component, Host, Optional } from '@angular/core';
import { FlowerService } from 'src/app/flower.service';

@Component({
  selector: 'app-host',
  template: `
    <div class="section">
    <h2>@Host() Component</h2>
    <p>Flower emoji: {{flower.emoji}}</p>
    <p><i>(@Host() stops it here)</i></p>
    <app-host-child></app-host-child>
  </div>
  `,
  providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }]
})
export class HostComponent {
  constructor(@Host() @Optional() public flower: FlowerService) { }

}
