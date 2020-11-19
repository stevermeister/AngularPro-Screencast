import { NgModule } from '@angular/core';
import { SecondComponent } from './second.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [SecondComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [SecondComponent]
})
export class SecondModule { }
