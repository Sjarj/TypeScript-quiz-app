import { IQuizListItem, Action } from './../models/index';
import { TYPES } from './../action/action-types';

export interface IQuizIOnitialState {
  quizListItem: IQuizListItem[];
}

const quizInitalState: IQuizIOnitialState = {
  quizListItem: []
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

    default:
      return state;
  }
};
