import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="">Home</a>
    <a routerLink="lazy" *ngIf="isLazyShown">Lazy</a>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  isLazyShown = true;
  
  constructor() {
    this.isLazyShown = false;
    setTimeout(() => this.isLazyShown = true, 3000)
  }
}
