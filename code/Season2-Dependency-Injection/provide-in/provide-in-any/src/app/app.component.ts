import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    Something
    <a routerLink="">Home</a>
    <a routerLink="lazy">Lazy</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(private dataService: DataService) {
  }
}
