import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { BaseRouteReuseStrategy, DefaultRouteReuseStrategy } from './base-route-reuse-strategy.service';
import { BookComponent } from './book/book.component';
import { CurtomRouteReuseStrategy } from './curtom-route-reuse-strategy.service';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'book/:bookId', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CurtomRouteReuseStrategy,
  }],
})
export class AppRoutingModule { }

