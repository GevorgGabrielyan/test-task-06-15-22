import {QuestionType} from "../enums/QuestionType";

export interface IQuestion {
  questionType: QuestionType;
  question: string;
  answerOptions: {
    option: string
  }[]
}
