import { Component, OnInit, SkipSelf } from "@angular/core";
import { LeafService } from "../leaf.service";

@Component({
  selector: "app-skipself",
  template: `
    <div class="section">
      <h2>@SkipSelf() Component</h2>
      <p>Leaf emoji: {{ leaf.emoji }}</p>
    </div>
  `,
  // Angular would ignore this LeafService instance
  providers: [{ provide: LeafService, useValue: { emoji: "🍁" } }],
})
export class SkipselfComponent {
  constructor(@SkipSelf() public leaf: LeafService) {}
}
