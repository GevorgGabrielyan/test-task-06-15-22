import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormBuilderComponent} from "./form-builder.component";
import {AnswersComponent, BuilderComponent} from "./components";
import {AnswerPageGuard} from "./components/answer-page.guard";

const routes: Routes = [
  {
    path: '',
    component: FormBuilderComponent,
    children: [
      { path: '', redirectTo: 'builder', pathMatch: "full" },
      {
        path: 'builder',
        component: BuilderComponent
      },
      {
        path: 'answers',
        canActivate: [AnswerPageGuard],
        component: AnswersComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
