import { createSelector } from "@reduxjs/toolkit";
import {RootState} from "../../../store";

export const listSelector = (state: RootState) => state.todo.list
export const filterSelector = (state: RootState) => state.todo.filter
export const editingTodoSelector = (state: RootState) => state.todo.editingTodo
export const editingTodoLoadingSelector = (state: RootState) => state.todo.editingTodoLoading
export const editingTodoErrorSelector = (state: RootState) => state.todo.editingTodoError

export const editingTodoCombinedSelector = createSelector(
  editingTodoSelector,
  editingTodoLoadingSelector,
  editingTodoErrorSelector,
  (editingTodo, editingTodoLoading, editingTodoError) => ({
    editingTodo,
    editingTodoLoading,
    editingTodoError,
  })
);

export const filteredTodoListSelector = createSelector(
  listSelector,
  filterSelector,
  (list, filter) => {
    switch (filter) {
      case 'active':
        return list.filter((todo) => !todo.done)
      case 'done':
        return list.filter((todo) => todo.done)
      default:
        return list
    }
  }
)
