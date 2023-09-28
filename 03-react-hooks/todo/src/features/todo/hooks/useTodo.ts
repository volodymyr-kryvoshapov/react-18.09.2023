import React, {useEffect} from "react";
import {TodoI} from "../type";
import {TodoApi} from "../api/server";

const DEFAULT_TODO: TodoI = {
  title: '',
  done: false,
}

export function useTodo() {
  const [editingTodo, setEditingTodo] = React.useState<TodoI>(DEFAULT_TODO)
  const [list, setList] = React.useState<TodoI[]>([])

  useEffect(() => {
    TodoApi.getList().then((todoList) => {
      setList(todoList)
    })
  }, [])

  const onTodoSubmit = (todo: TodoI) => {
    if (todo.id) {
      TodoApi.update(todo.id, todo).then((updatedTodo) => {
        setList(list.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo))
        setEditingTodo(DEFAULT_TODO)
      })

      return
    }

    TodoApi.create(todo).then((newTodo) => {
      setList([...list, newTodo])
      setEditingTodo(DEFAULT_TODO)
    })
  }

  const deleteTodo = (id: number) => {
    TodoApi.delete(id).then(() => {
      setList(list.filter((todo) => todo.id !== id))
    })
  }

  const editTodo = (todo: TodoI) => {
    setEditingTodo(todo)
  }

  return {
    editingTodo,
    list,
    onTodoSubmit,
    deleteTodo,
    editTodo,
  }
}