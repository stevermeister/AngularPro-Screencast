import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *delay="3000; hide:3000">
      this element will appear after some time
    </div>
  `,
  styles: []
})
export class AppComponent {}
