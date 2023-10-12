import { combineReducers } from "redux";
import { reducer as todoReducer } from '../features/Todo/store/reducer';

export const reducer = combineReducers({
    todo: todoReducer,
});
