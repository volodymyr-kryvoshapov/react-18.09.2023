import React from "react";
import {TodoList} from "./TodoList";
import {FormEdit} from "./FormEdit";

export function TodoApp() {
  return (
    <>
      <FormEdit />
      <TodoList />
    </>
  );
}