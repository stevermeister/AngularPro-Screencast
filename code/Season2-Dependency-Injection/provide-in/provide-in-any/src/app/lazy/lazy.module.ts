import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LazyComponent }
];
@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
