import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

        <section class="present" style="top: 0px; display: block;">
          <img src="assets/cd-tree.svg">
        </section>



   <div class="component">Component</div>
   <app-parent-one></app-parent-one>
   <app-parent-two></app-parent-two>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'markForCheck-vs-detectChanges';
}
