import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <carousel>
      <div *carouselItem>🐌</div>
      <div *carouselItem>🦋</div>
      <div *carouselItem>🐝</div>
      <div *carouselItem>🐠</div>
      <div *carouselItem>🐢</div>
      <div *carouselItem>🦆</div>
      <hacker></hacker>
    </carousel>
  `
})
export class AppComponent {}
