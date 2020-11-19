import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-lazy',
  template: `
    <p>
      lazy works!
    </p>
  `,
})
export class LazyComponent implements OnInit {

  constructor(dataService: DataService) { 
  }

  ngOnInit(): void {
  }

}
