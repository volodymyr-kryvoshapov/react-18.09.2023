import { all } from 'redux-saga/effects';
import {todoWatch} from "../features/Todo/store/sagas";

export function* rootSaga() {
  yield all([
    todoWatch(),
  ]);
}