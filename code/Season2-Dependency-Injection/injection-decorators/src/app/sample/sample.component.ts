import { Component, Optional, Self, SkipSelf} from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-sample',
  template: `<p>Flower emoji: {{ flower?.emoji }}</p>`,
  viewProviders: [{ provide: FlowerService, useValue: { emoji: "🌼" } }],
})
export class SampleComponent {
  constructor(@Optional() @SkipSelf() public flower: FlowerService) {
    if(flower){
      //...
    }
  }
}
