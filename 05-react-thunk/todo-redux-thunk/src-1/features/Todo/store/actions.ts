import {TodoI} from "../type";

export const ACTION_TODO_SET_LIST = 'ACTION_TODO_SET_LIST'
export const ACTION_TODO_SET_EDITING_ITEM = 'ACTION_TODO_SET_EDITING_ITEM'
export const ACTION_TODO_UPDATE_ITEM = 'ACTION_TODO_UPDATE_ITEM'
export const ACTION_TODO_CREATE_ITEM = 'ACTION_TODO_CREATE_ITEM'
export const ACTION_TODO_REMOVE_ITEM = 'ACTION_TODO_REMOVE_ITEM'

export function setListAction(list: TodoI[]) {
  return { type: ACTION_TODO_SET_LIST, payload: list, }
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
