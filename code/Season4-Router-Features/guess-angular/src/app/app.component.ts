import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="">Home</a>
    <a routerLink="example">Example</a>
    <a routerLink="media">Media</a>
    <a routerLink="about">About</a>
    <br>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'guess-angular';
}
