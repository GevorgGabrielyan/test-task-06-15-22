import {Component, Input} from '@angular/core';
import {QuestionType} from "../enums/QuestionType";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {IQuestion} from "../interfaces/IQuestion";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.less']
})
export class NewQuestionComponent {
  @Input()
  selectedQuestion: IQuestion[] = [];

  private textMinLength = 2;

  public newQuestionForm: FormGroup = new FormGroup({
    questionType: new FormControl('', [Validators.required]),
    question: new FormControl('', [
      Validators.required,
      Validators.minLength(this.textMinLength),
      this.uniqQuestionValidator.bind(this),
      this.onlySpaceValidator.bind(this)
    ]),
    answerOptions: new FormArray([]),
  })

  public QuestionType = QuestionType;

  get answerOptions() {
    return this.newQuestionForm.controls["answerOptions"] as FormArray;
  }

  public changeQuestionType(type: QuestionType) {
    this.newQuestionForm.get('question')?.reset();
    const array = this.newQuestionForm.get('answerOptions') as FormArray;
    array.clear();
    if (type === QuestionType.CHECKBOX_LIST) {
      this.addAnswerOption();
    }
  }

  public addAnswerOption(): void {
    const formArray = this.newQuestionForm.get('answerOptions') as FormArray;
    formArray.push(this.generateOptionForm())
  }

  private generateOptionForm(): FormGroup<{ option: FormControl<string | null> }> {
    return new FormGroup({
      option: new FormControl('', [
        Validators.required,
        Validators.minLength(this.textMinLength),
        this.uniqOptionValidator.bind(this),
        this.onlySpaceValidator.bind(this)
      ])
    })
  }

  private uniqOptionValidator(control: FormControl): { uniq: true } | null {
    const formArray = this.newQuestionForm.get('answerOptions')?.value as { option: string }[];
    const hesSameName = formArray.some(item => item.option?.trim() === control.value?.trim());
    if (hesSameName) {
      return { uniq: true }
    }
    return null
  }

  private uniqQuestionValidator(control: FormControl): { uniq: true } | null {
    const hesSameName = this.selectedQuestion.some(item => item.question?.trim() === control.value?.trim());
    if (hesSameName) {
      return { uniq: true }
    }
    return null
  }

  private onlySpaceValidator(control: FormControl): { required: true } | null {
    if (!control.value?.trim()) {
      return { required: true }
    }
    return null
  }
}
