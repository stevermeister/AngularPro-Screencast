import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { Animal } from '../animal';
import { CatComponent } from '../cat/cat.component';
import { DogComponent } from '../dog/dog.component';
import { LinkDirective } from '../link.directive';

@Component({
  selector: 'app-animals',
  template: `
    <ng-content></ng-content>

    <button (click)="say()">Say!</button>
  `
})
export class AnimalsComponent {

  @ContentChildren(Animal) animals: QueryList<Animal>

  say() {
    // this.animals.forEach(animal => console.log(animal));
    this.animals.forEach(animal => animal.say());
  }
}
