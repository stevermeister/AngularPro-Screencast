import { Component, OnInit, Optional, Self } from "@angular/core";
import { LeafService } from '../leaf.service';

@Component({
  selector: "app-self-no-data",
  template: `
    <div class="section">
      <h2>@Self() Component (without a provider)</h2>
      <p>Leaf emoji: {{ leaf?.emoji }}</p>
    </div>
  `,
  styles: [],
})
export class SelfNoDataComponent  {
  constructor(@Self() @Optional() public leaf: LeafService) { }
}
