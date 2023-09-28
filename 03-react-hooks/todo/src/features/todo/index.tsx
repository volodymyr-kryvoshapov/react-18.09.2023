import React, {useEffect} from "react";
import {TodoList} from "./TodoList";
import {FormEdit} from "./FormEdit";
import {useTodo} from "./hooks/useTodo";

export function TodoApp() {
  const {editingTodo, list, onTodoSubmit, deleteTodo, editTodo} = useTodo()

  return (
    <div>
      <FormEdit todo={editingTodo} onTodoSubmit={onTodoSubmit} />
      <TodoList list={list} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}