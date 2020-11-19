import { Component, ApplicationRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  template: `
    <p> first works! data: {{number}}</p>
    <button (click)="up()">+</button>
  `,
  styles: [
  ],
})
export class FirstComponent {

  number: number;

  constructor(private dataService: DataService, app: ApplicationRef) { 
    this.dataService.getData$().subscribe(data => {
      this.number = data;
      app.tick();
    });
  }

  up() {
    this.dataService.setData(this.number+1);
  }


}