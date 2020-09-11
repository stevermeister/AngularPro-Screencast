import { Component } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'fox',
  template: `
    <p>
      fox: <strong>{{phrase}}</strong>
    </p>
  `,
  providers: [{ provide: Animal, useExisting: FoxComponent }]
})
export class FoxComponent extends Animal {

  phrase = ''

  say() {
    this.phrase = 'wow';
  }

}
