import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *delay="1000; hide:2000">
      this element will appear after some time
    </div>
  `,
  styles: []
})
export class AppComponent {}
