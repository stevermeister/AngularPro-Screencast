import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () =>
      import("./index/index.module").then((m) => m.IndexModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "example",
    loadChildren: () =>
      import("./example/example.module").then((m) => m.ExampleModule),
  },
  {
    path: "media",
    loadChildren: () =>
      import("./media/media.module").then((m) => m.MediaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
