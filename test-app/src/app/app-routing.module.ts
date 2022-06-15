import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: "full" },
  {
    path: 'form',
    loadChildren: () => import('./modules/form-builder/form-builder.module').then(m => m.FormBuilderModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
