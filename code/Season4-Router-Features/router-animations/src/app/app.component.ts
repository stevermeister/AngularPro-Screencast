import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myAnimation } from './animations/2';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <main [@myAnimation]="getRouterOutletState(o)">
      <router-outlet #o="outlet"></router-outlet>
    </main>
  `,
  styleUrls: ["./app.component.scss"],
  animations: [myAnimation]
})
export class AppComponent {
  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
