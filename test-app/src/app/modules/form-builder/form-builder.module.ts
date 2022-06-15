import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { FormBuilderComponent } from "./form-builder.component";
import { FormBuilderRoutingModule } from "./form-builder-routing.module";
import { AnswersComponent, BuilderComponent, NewQuestionComponent, QuestionBlockComponent } from "./components";
import {FormBuilderService} from "./components/form-builder.service";
import {AnswerPageGuard} from "./components/answer-page.guard";

@NgModule({
  declarations: [FormBuilderComponent, BuilderComponent, AnswersComponent, NewQuestionComponent, QuestionBlockComponent],
  imports: [FormBuilderRoutingModule, SharedModule, CommonModule, ReactiveFormsModule, FormsModule],
  entryComponents: [NewQuestionComponent],
  providers: [FormBuilderService, AnswerPageGuard]
})
export class FormBuilderModule {}
