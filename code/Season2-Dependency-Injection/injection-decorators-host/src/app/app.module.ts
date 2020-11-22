import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ExtraDirective } from './extra.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ExtraDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
