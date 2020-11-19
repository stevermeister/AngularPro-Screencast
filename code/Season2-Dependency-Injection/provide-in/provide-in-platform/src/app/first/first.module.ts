import { NgModule } from '@angular/core';
import { FirstComponent } from './first.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [FirstComponent]
})
export class FirstModule { }
