import { IStore } from './../reducers/index';
import { IQuizListItem } from '../models';

export const getCurrentListItem = (
  state: IStore
): IQuizListItem | undefined => {
  if (state.quiz.quizListItem.length > 0) {
    return state.quiz.quizListItem[state.quiz.currentQuizItemIndex];
  }
};
