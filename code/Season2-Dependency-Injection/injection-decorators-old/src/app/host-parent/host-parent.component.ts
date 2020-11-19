import { Component, OnInit } from "@angular/core";
import { FlowerService } from "../flower.service";

@Component({
  selector: "app-host-parent",
  template: `
    <div class="section">
      <h2>Parent of @Host() Component</h2>
      <p>Flower emoji: {{ flower.emoji }}</p>
      <app-host></app-host>
    </div>
  `,
  providers: [{ provide: FlowerService, useValue: { emoji: "🌺" } }],
})
export class HostParentComponent {
  constructor(public flower: FlowerService) { }
}
