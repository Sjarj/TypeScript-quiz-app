export interface IQuizListItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
export interface IQuizList {
  results: IQuizListItem[];
}

export interface Action<T> {
  type: string;
  payload: T;
}
