import { QuizReducer } from './quiz';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  quiz: QuizReducer
});

export type IStore = ReturnType<typeof rootReducer>;
export default rootReducer;
