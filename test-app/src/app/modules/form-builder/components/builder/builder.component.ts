import {Component} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {NewQuestionComponent} from "../new-question/new-question.component";
import {IQuestion} from "../interfaces/IQuestion";
import {IAnswer} from "../interfaces/IAnswer";
import {FormBuilderService} from "../form-builder.service";
import {QuestionType} from "../enums/QuestionType";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.less']
})
export class BuilderComponent {
  public questions: IQuestion[] = [];

  public answers: IAnswer[] = [];

  constructor(private modalService: NzModalService, private formBuilderService: FormBuilderService) { }

  public addNewQuestionModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Add a New Questions',
      nzContent: NewQuestionComponent,
      nzComponentParams: {
        selectedQuestion: this.questions
      },
      nzFooter: [
        {
          type: "primary",
          label: 'Submit',
          disabled: contentComponentInstance => !!contentComponentInstance?.newQuestionForm.invalid,
          onClick: (contentComponentInstance) => {
            const data: IQuestion = { ...contentComponentInstance?.newQuestionForm.value };
            const otherOption = data.answerOptions?.find(item => item.option === 'Other')
            if (data.questionType === QuestionType.CHECKBOX_LIST && !otherOption) {
              data.answerOptions.push({ option: 'Other' })
            }
            this.questions.push(data)
            this.answers = this.questions.map(item => {
              return {
                question: item.question,
                questionType: item.questionType,
              }
            })
            this.formBuilderService.selectAnswers(this.answers);
            modal.close()
          }
        }
      ]
    });
  }

  public optionSelect(options: string[], index: number) {
    this.answers[index].answerOptions = options;
    this.formBuilderService.selectAnswers(this.answers);
  }

  public paragraphAnswerChange(options: string, index: number) {
    this.answers[index].answer = options;
    this.formBuilderService.selectAnswers(this.answers);
  }
}
