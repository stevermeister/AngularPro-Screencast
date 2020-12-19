import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-two',
  template: `
  {{cdCheck()}}
          <a>Cmp2
          
          <br><h6 (click)="cd.detectChanges()">[detectChanges()]</h6>
          <br><h6 (click)="cd.markForCheck()">[markForCheck()]</h6>
          <br><h6 (click)="cd.detach()">[detach()]</h6>
          <br><h6 (click)="cd.reattach()">[reattach()]</h6>
 
          </a>

<ul>
    <li>
        <app-four></app-four>
    </li>
    <li>
        <app-five></app-five>
    </li>
</ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent {

  random = Math.random();

  constructor(private el: ElementRef, public cd: ChangeDetectorRef) {}

  cdCheck() {
    hightlight(this.el);
  }
}
