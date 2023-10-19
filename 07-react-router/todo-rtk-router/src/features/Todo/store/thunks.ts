import {
  createItemAction,
  removeItemAction,
  updateItemAction,
  getListActionLoading,
  getListActionSuccess,
  getListActionError,
  getEditingItemActionLoading,
  getEditingItemActionSuccess,
  getEditingItemActionError,
} from "./reducer";
import {TodoApi} from "../api/server";
import {TodoI} from "../type";

export function getList() {
  return (dispatch: any) => {
    dispatch(getListActionLoading())

    TodoApi
      .getList()
      .then((todoList) => {
        dispatch(getListActionSuccess(todoList))
      })
      .catch((error: any) => {
        dispatch(getListActionError(error.message))
      })
  }
}

export function getEditingItem(id: number) {
  return async (dispatch: any) => {
    dispatch(getEditingItemActionLoading())

    try {
      const todo = await TodoApi.getOne(id)

      dispatch(getEditingItemActionSuccess(todo))
    } catch (error: any) {
      dispatch(getEditingItemActionError(error.message))
    }
  }
}

export function removeItem(id: number) {
  return async (dispatch: any) => {
    await TodoApi.delete(id)
    dispatch(removeItemAction(id))
  }
}

export function saveItem(todo: TodoI) {
  return async (dispatch: any) => {
    if (todo.id) {
      const updatedTodo = await TodoApi.update(todo.id, todo)

      dispatch(updateItemAction(updatedTodo))
    } else {
      const newTodo = await TodoApi.create(todo)

      dispatch(createItemAction(newTodo))
    }
  }
}
