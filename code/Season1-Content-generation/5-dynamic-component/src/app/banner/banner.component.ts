import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <p>
      banner works!
    </p>
  `,
  styles: [
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
