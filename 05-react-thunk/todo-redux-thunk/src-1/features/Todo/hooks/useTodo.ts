import React, {useEffect, useCallback} from "react";
import {TodoI} from "../type";
import {TodoApi} from "../api/server";
import {useDispatch, useSelector} from "react-redux";
import {
  createItemAction,
  removeItemAction, setEditingItemAction,
  setListAction,
  updateItemAction
} from "../store/actions";

const DEFAULT_TODO: TodoI = {
  title: '',
  done: false,
}

export function useTodo() {
  const dispatch = useDispatch()
  const list = useSelector((state: any) => state.todo.list)
  const editingTodo = useSelector((state: any) => state.todo.editingTodo)

  const getList = useCallback(() => {
    TodoApi.getList().then((todoList) => {
      dispatch(setListAction(todoList))
    })
  }, [])

  useEffect(() => {
    getList()
  }, [getList])

  const onTodoSubmit = (todo: TodoI) => {
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

  const deleteTodo = (id: number) => {
    TodoApi.delete(id).then(() => {
      dispatch(removeItemAction(id))
    })
  }

  const editTodo = (todo: TodoI) => {
    dispatch(setEditingItemAction(todo))
  }

  return {
    editingTodo,
    list,
    onTodoSubmit,
    deleteTodo,
    editTodo,
  }
}
