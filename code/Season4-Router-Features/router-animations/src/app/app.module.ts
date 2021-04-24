import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FairyTernComponent } from './fairy-tern/fairy-tern.component';
import { KakapoComponent } from './kakapo/kakapo.component';
import { TakaheComponent } from './takahe/takahe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FairyTernComponent,
    KakapoComponent,
    TakaheComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
