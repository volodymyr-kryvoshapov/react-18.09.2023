import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import {
  getListActionError,
  getListActionRequest,
  getListActionSuccess,
  removeItemAction,
  removeItemRequestType
} from "./reducer";
import {TodoApi} from "../api/server";
import {DELETE} from "../../../api/FetchClient";
import {TodoI} from "../type";
import {PayloadAction} from "@reduxjs/toolkit";

function* getTodoListWorker() {
  try {
    // const todoList: TodoI[] = yield TodoApi.getList()
    const todoList: TodoI[] = yield call([TodoApi, 'getList']) // { type: 'CALL', payload: [TodoApi, 'getList'] }

    yield put(getListActionSuccess(todoList)) // { type: 'PUT', payload: getListActionSuccess(todoList) }
  } catch (error: any) {
    yield put(getListActionError(error.message))
  }
}

interface RemoveTodoPayload {
  id: number
  resolve: () => any
  reject: () => any
}

function* removeTodoWorker(action: PayloadAction<RemoveTodoPayload>) {
  try {
    yield call([TodoApi, DELETE], action.payload.id)
    yield put(removeItemAction(action.payload.id))

    action.payload.resolve()
  } catch (error: any) {
    action.payload.reject()
  }
}

export function* todoWatch() {
  yield all([
    takeEvery(getListActionRequest, getTodoListWorker),
    takeEvery(removeItemRequestType, removeTodoWorker),
  ]);
}