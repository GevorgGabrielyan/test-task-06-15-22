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
  public other = '';

  public QuestionType = QuestionType;

  public selectedOptions: string[] = []

  selectData(items: string[]) {
    this.selectedOptions = [...items];

    if (this.selectedOptions.includes('Other')) {
      this.selectedOptions.push(this.other)
    } else {
      this.other = ''
    }

    this.optionSelect.emit(this.selectedOptions)
  }

  otherOptionSelect(item: string) {
    if (!item.trim()) {
      return;
    }
    if (this.selectedOptions.length > (this.item?.answerOptions?.length || 0)) {
      this.selectedOptions[this.selectedOptions.length - 1] = item
    } else {
      this.selectedOptions.push(item);
    }

    this.optionSelect.emit(this.selectedOptions)
  }
}
