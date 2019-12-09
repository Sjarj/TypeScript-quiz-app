import { IQuizListItem, Action } from './../models/index';
import { TYPES } from './../action/action-types';

export interface IQuizIOnitialState {
  quizListItem: IQuizListItem[];
  currentQuizItemIndex: number;
  score: number;
}

const quizInitalState: IQuizIOnitialState = {
  quizListItem: [],
  currentQuizItemIndex: 0,
  score: 0
};
export const QuizReducer = (
  state = quizInitalState,
  action: any
): IQuizIOnitialState => {
  switch (action.type) {
    case TYPES.getQuizListItems:
      return {
        ...state,
        quizListItem: (action as Action<IQuizListItem[]>).payload
      };
    case TYPES.incrementScore:
      return {
        ...state,
        score: state.score + 1
      };
    case TYPES.setNextQuestion:
      return {
        ...state,
        currentQuizItemIndex: state.currentQuizItemIndex + 1
      };
    case TYPES.restart:
      return {
        ...state,
        currentQuizItemIndex: 0,
        score: 0
      };

    default:
      return state;
  }
};
