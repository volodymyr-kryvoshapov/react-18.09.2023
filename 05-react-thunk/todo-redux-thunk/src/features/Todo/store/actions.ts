import {TodoI} from "../type";

export const ACTION_TODO_GET_LIST_LOADING = 'ACTION_TODO_GET_LIST_LOADING'
export const ACTION_TODO_GET_LIST_SUCCESS = 'ACTION_TODO_GET_LIST_SUCCESS'
export const ACTION_TODO_GET_LIST_ERROR = 'ACTION_TODO_GET_LIST_ERROR'

export const ACTION_TODO_SET_EDITING_ITEM = 'ACTION_TODO_SET_EDITING_ITEM'
export const ACTION_TODO_UPDATE_ITEM = 'ACTION_TODO_UPDATE_ITEM'
export const ACTION_TODO_CREATE_ITEM = 'ACTION_TODO_CREATE_ITEM'
export const ACTION_TODO_REMOVE_ITEM = 'ACTION_TODO_REMOVE_ITEM'

export function getListActionLoading() {
  return { type: ACTION_TODO_GET_LIST_LOADING }
}

export function getListActionSuccess(list: TodoI[]) {
  return { type: ACTION_TODO_GET_LIST_SUCCESS, payload: list, }
}

export function getListActionError(error: Error) {
  return { type: ACTION_TODO_GET_LIST_ERROR, payload: error, }
}

export function setEditingItemAction(todo: TodoI) {
  return { type: ACTION_TODO_SET_EDITING_ITEM, payload: todo }
}

export function updateItemAction(todo: TodoI) {
  return { type: ACTION_TODO_UPDATE_ITEM, payload: todo }
}

export function createItemAction(todo: TodoI) {
  return { type: ACTION_TODO_CREATE_ITEM, payload: todo }
}

export function removeItemAction(id: number) {
  return { type: ACTION_TODO_REMOVE_ITEM, payload: id }
}
