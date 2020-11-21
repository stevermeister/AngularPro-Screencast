import { Directive, Host, Optional, Self } from '@angular/core';
import { FlowerService } from './flower.service';
import { SampleComponent } from './sample/sample.component';

@Directive({
  selector: '[extra]',
  // providers: [{ provide: FlowerService, useValue: { emoji: "🌺" } }],
})
export class ExtraDirective {
  constructor(@Optional() @Host() public flower: FlowerService,
  @Optional() @Self() sc: SampleComponent){
    console.log(flower?.emoji);
    console.log(sc)
  }
}
