import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { RockComponent } from './rock/rock.component';
import { FoxComponent } from './fox/fox.component';
import { AnimalsComponent } from './animals/animals.component';
import { LinkDirective } from './link.directive';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent,
    RockComponent,
    FoxComponent,
    AnimalsComponent,
    LinkDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
