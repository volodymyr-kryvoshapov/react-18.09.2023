import {
  createItemAction,
  removeItemAction,
  updateItemAction,
  getListActionLoading,
  getListActionSuccess,
  getListActionError,
} from "./actions";
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
      .catch((error) => {
        dispatch(getListActionError(error))
      })
  }
}

export function removeItem(id: number) {
  return (dispatch: any) => {
    TodoApi.delete(id).then(() => {
      dispatch(removeItemAction(id))
    })
  }
}

export function saveItem(todo: TodoI) {
  return (dispatch: any) => {
    if (todo.id) {
      TodoApi.update(todo.id, todo).then((updatedTodo) => {
        dispatch(updateItemAction(updatedTodo))
      })
    } else {
      TodoApi.create(todo).then((newTodo) => {
        dispatch(createItemAction(newTodo))
      })
    }
  }
}

// dispatch(getList()) -> f -> thunk -> f(dispatch, getState) -> dispatch({}) -> {} -> reducer -> state