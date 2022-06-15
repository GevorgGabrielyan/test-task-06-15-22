import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {IAnswer} from "./interfaces/IAnswer";

@Injectable()
export class FormBuilderService {
  private answers: IAnswer[] = [];
  private answersData$: BehaviorSubject<IAnswer[]> = new BehaviorSubject<IAnswer[]>([])

  public selectAnswers(answers: IAnswer[]): void {
    this.answers = answers;
    this.answersData$.next(answers)
  }

  public getAnswers(): Subject<IAnswer[]> {
    return this.answersData$
  }

  public hesAnswers(): boolean {
    return !!this.answers.length
  }
}
