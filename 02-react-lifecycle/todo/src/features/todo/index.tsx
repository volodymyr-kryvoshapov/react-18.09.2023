import React, {useEffect} from "react";
import {TodoList} from "./TodoList";
import {TodoApi} from "./api/TodoApi";
import {Todo} from "./type";
import {FormEdit} from "./FormEdit";

export function TodoApp() {
  const [list, setList] = React.useState<Todo[]>([])

  useEffect(() => {
    TodoApi.getList().then((todoList) => {
      setList(todoList)
    })
  }, [])

  const onTodoSubmit = (todo: Todo) => {
    TodoApi.create(todo).then((newTodo) => {
      setList([...list, newTodo])
    })
  }

  return (
    <div>
      <FormEdit onTodoSubmit={onTodoSubmit} />
      <TodoList list={list} />
    </div>
  );
}