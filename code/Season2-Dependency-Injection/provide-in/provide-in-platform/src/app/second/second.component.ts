import { Component, ApplicationRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  template: `
    <p> second works! data: {{number}}</p>
    <button (click)="down()">-</button>
  `,
  styles: [
  ],
})
export class SecondComponent {

  number: number;

  constructor(private dataService: DataService, app: ApplicationRef) { 
    this.dataService.getData$().subscribe(data => {
      this.number = data;
      app.tick();
    });
  }

  down() {
    this.dataService.setData(this.number-1);
  }

}