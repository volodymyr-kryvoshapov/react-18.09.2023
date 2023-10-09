import { combineReducers } from "redux";
import { reducer as counterReducer } from '../features/Counter/store/reducer';
import { reducer as todoReducer } from '../features/Todo/store/reducer';

export const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});
