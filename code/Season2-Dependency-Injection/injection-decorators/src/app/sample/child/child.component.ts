import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { FlowerService } from 'src/app/flower.service';

@Component({
  selector: 'app-child',
  template: `<p>Flower emoji: {{ flower?.emoji }}</p>`,
  // providers: [{ provide: FlowerService, useValue: { emoji: "🌼" } }],
})
export class ChildComponent {
  
  
  constructor(@Optional() @Self() public flower: FlowerService) {
    if(flower){
      /// as;lkdfjasldkfjaslk;dfj
    }
  }
}
