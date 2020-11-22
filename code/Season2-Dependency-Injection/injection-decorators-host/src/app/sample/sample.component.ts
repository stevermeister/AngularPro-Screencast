import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-sample',
  template: `
    <p extra>
      sample works!
    </p>
  `,
  viewProviders: [{ provide: FlowerService, useValue: { emoji: "🌼" } }],
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
