import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { HackerComponent } from './hacker/hacker.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    HackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
