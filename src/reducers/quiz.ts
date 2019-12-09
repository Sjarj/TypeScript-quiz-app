import { TYPES } from './../action/action-types';
const quizListItems = {};

export default (state = quizListItems, { type, payload }): any => {
  switch (type) {
    case TYPES.getQuizListItems:
      return { ...state, quizListItems: payload };

    default:
      return state;
  }
};
