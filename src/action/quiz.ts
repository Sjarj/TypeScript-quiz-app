import { IQuizList } from './../models/index';
import axios from 'axios';
import { TYPES } from './action-types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard'
}

export const getQuizListItem = (
  questionAmount: number,
  difficulty: Difficulty
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const r = await axios.get<IQuizList>(
      `https://opentdb.com/api.php?amount=${questionAmount}&difficulty=${difficulty}&type=boolean`
    );
    dispatch({ type: TYPES.getQuizListItems, payload: r.data.results });
  };
};

export const giveAnswer = (
  isCorrectAnswer: boolean,
  isLastQuestion: boolean
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    if (isCorrectAnswer) {
      dispatch({ type: TYPES.incrementScore });
    }
    if (!isLastQuestion) {
      dispatch({ type: TYPES.setNextQuestion });
    }
  };
};

export const restart = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: TYPES.restart });
    dispatch(getQuizListItem(10, Difficulty.easy));
  };
};
