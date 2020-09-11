import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-animals>
    <cat alink></cat>
    <dog alink></dog>
    <rock></rock>
    <fox alink></fox>
    <p>just an element</p>
   </app-animals>    
  `,
  styles: []
})
export class AppComponent {

}
