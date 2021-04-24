import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FairyTernComponent } from './fairy-tern/fairy-tern.component';
import { KakapoComponent } from './kakapo/kakapo.component';
import { TakaheComponent } from './takahe/takahe.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'kakapo',  },
  { path: 'kakapo', component: KakapoComponent },
  { path: 'takahe', component: TakaheComponent },
  { path: 'fairy-tern', component: FairyTernComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
