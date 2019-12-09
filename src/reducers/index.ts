import { QuizReducer } from './quiz';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  quiz: QuizReducer
});

export default rootReducer;
