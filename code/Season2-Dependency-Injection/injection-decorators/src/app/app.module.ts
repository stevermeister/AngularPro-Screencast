import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtraDirective } from './extra.directive';
import { SampleComponent } from './sample/sample.component';
import { ChildComponent } from './sample/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtraDirective,
    SampleComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
