import React from "react";
import {TodoList} from "./TodoList";
import {FormEdit} from "./FormEdit";
import {Routes, Route} from "react-router-dom";
import {NotFound} from "../NotFound";

export function TodoApp() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/create" element={<FormEdit />} />
      <Route path="/edit/:id" element={<FormEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}