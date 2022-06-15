import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionType} from "../enums/QuestionType";
import {IAnswer} from "../interfaces/IAnswer";
import {FormBuilderService} from "../form-builder.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.less']
})
export class AnswersComponent implements OnInit, OnDestroy {
  public answers: IAnswer[] = [];

  public QuestionType = QuestionType;

  private onDestroy$: Subject<void> = new Subject();

  constructor(private formBuilderService: FormBuilderService) { }

  ngOnInit(): void {
    this.formBuilderService.getAnswers().pipe(takeUntil(this.onDestroy$)).subscribe(res => {
      this.answers = res;
    })
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
