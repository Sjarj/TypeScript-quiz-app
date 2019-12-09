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
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const r = await axios.get<IQuizList>(
      `https://opentdb.com/api.php?amount=${questionAmount}&difficulty=${difficulty}&type=boolean`
    );
    dispatch({ type: TYPES.getQuizListItems, payload: r.data.results });
  };
};
