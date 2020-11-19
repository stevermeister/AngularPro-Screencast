import { Component } from "@angular/core";
import { FlowerService } from './flower.service';
import { LeafService } from './leaf.service';

@Component({
  selector: "app-root",
  template: `
    <h1>DI resolution modifiers</h1>

    <p>Basic flower service: {{ flower.emoji }}</p>
    <p>Basic leaf service: {{ leaf.emoji }}</p>

    <app-self></app-self>

    <app-self-no-data></app-self-no-data>

    <app-skipself></app-skipself>

    <app-host-parent></app-host-parent>
  `,
  styles: [],
})
export class AppComponent {
  constructor(public flower: FlowerService, public leaf: LeafService) {}
}
