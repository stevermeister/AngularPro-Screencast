import { Component, OnInit } from "@angular/core";
import { FlowerService } from 'src/app/flower.service';

@Component({
  selector: "app-host-child",
  template: `
    <div class="section">
      <h2>Child of @Host() Component</h2>
      <p>Flower emoji: {{ flower.emoji }}</p>
    </div>
  `,
  styles: [],
})
export class HostChildComponent {
  constructor(public flower: FlowerService) { }
}
