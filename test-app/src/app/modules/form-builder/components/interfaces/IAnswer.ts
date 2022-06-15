import {QuestionType} from "../enums/QuestionType";

export interface IAnswer {
  questionType: QuestionType;
  answer?: string;
  question: string;
  answerOptions?: string[]
}
