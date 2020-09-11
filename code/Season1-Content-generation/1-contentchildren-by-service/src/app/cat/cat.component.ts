import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'cat',
  template: `
    <p>
      cat: <strong>{{phrase}}</strong>
    </p>
  `,
  providers: [{ provide: Animal, useExisting: CatComponent }]
})
export class CatComponent extends Animal {

  phrase = ''

  say() {
    this.phrase = 'meow';
  }

}
