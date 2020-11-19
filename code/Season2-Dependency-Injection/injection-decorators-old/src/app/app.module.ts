import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelfComponent } from './self/self.component';
import { SkipselfComponent } from './skipself/skipself.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { HostComponent } from './host-parent/host/host.component';
import { HostChildComponent } from './host-parent/host/host-child/host-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SelfComponent,
    SkipselfComponent,
    SelfNoDataComponent,
    HostParentComponent,
    HostComponent,
    HostChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
