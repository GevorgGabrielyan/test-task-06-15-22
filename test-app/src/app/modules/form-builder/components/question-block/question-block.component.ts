import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IQuestion} from "../interfaces/IQuestion";
import {QuestionType} from "../enums/QuestionType";

@Component({
  selector: 'app-question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.less']
})
export class QuestionBlockComponent {
  @Input()
  public item: IQuestion | undefined;

  @Output()
  public paragraphAnswerChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public optionSelect: EventEmitter<string[]> = new EventEmitter<string[]>();

  public paragraphAnswer = '';

  public QuestionType = QuestionType;

  public selectedOptions: string[] = []

  selectData(items: string[]) {
    this.selectedOptions = items;
    this.optionSelect.emit(this.selectedOptions)
  }
}
