import { Component} from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-sample',
  template: `
  <app-child extra></app-child>
`,
})
export class SampleComponent {}
