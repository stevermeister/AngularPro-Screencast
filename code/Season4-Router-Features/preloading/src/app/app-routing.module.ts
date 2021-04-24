import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CustomPreloadingService } from './custom-preloading.service';
import { HomeComponent } from './home/home.component';
import { NetworkAwarePreloadingService } from './network-aware-preloading.service';
import { HoverPreloadModule, HoverPreloadStrategy } from 'ngx-hover-preload'
import { QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lazy',
    data: {
      preload: true
    },
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
