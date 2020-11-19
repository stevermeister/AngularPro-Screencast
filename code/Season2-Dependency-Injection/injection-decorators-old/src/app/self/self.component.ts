import { Component, ElementRef, OnInit, Self, ViewChild } from "@angular/core";
import { FlowerService } from '../flower.service';

@Component({
  selector: "app-self",
  template: `<div class="section">
    <h2>@Self() Component</h2>
    <p>Flower emoji: {{ flower?.emoji }}</p>
  </div> `,
  providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }]
})
export class SelfComponent {
  @ViewChild('foo', { static: true }) x : ElementRef;
  constructor(public flower: FlowerService) {}
}
