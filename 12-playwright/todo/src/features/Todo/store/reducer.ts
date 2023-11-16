import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TodoI} from "../type";
import {FILTER} from "../constants";

export const DEFAULT_TODO: TodoI = {
  title: '',
  done: false,
}
interface TodoStateI {
  editingTodo: TodoI,
  list: TodoI[],
  filter: FILTER,
  listLoading: boolean,
  listError?: string,
  editingTodoLoading: boolean,
  editingTodoError?: string,
}

const initialState: TodoStateI = {
  editingTodo: DEFAULT_TODO,
  list: [],
  filter: FILTER.ALL,
  listLoading: false,
  listError: '',
  editingTodoLoading: false,
  editingTodoError: '',
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setFilterAction: (state: TodoStateI, action: PayloadAction<FILTER>) => {
      state.filter = action.payload
    },
    getListActionLoading: (state: TodoStateI) => {
      state.listLoading = true
      state.listError = ''
    },
    getListActionSuccess: (state: TodoStateI, action: PayloadAction<TodoI[]>) => {
      state.list = action.payload
      state.listLoading = false
    },
    getListActionError: (state: TodoStateI, action: PayloadAction<string>) => {
      state.listError = action.payload
      state.listLoading = false
    },

    getEditingItemActionLoading: (state: TodoStateI) => {
      state.editingTodoLoading = true
      state.editingTodoError = ''
    },
    getEditingItemActionSuccess: (state: TodoStateI, action: PayloadAction<TodoI>) => {
      state.editingTodo = action.payload
      state.editingTodoLoading = false
    },
    getEditingItemActionError: (state: TodoStateI, action: PayloadAction<string>) => {
      state.editingTodoError = action.payload
      state.editingTodoLoading = false
    },

    setEditingItemAction: (state: TodoStateI, action: PayloadAction<TodoI>) => {
      state.editingTodo = action.payload
    },
    updateItemAction: (state: TodoStateI, action: PayloadAction<TodoI>) => {
      state.list = state.list.map((todo: TodoI) => todo.id === action.payload.id ? action.payload : todo)
      state.editingTodo = DEFAULT_TODO
    },
    createItemAction: (state: TodoStateI, action: PayloadAction<TodoI>) => {
      state.list = [...state.list, action.payload]
      state.editingTodo = { ...DEFAULT_TODO }
    },
    removeItemAction: (state: TodoStateI, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo: TodoI) => todo.id !== action.payload)
    }
  },
})

export const { actions, reducer } = todoSlice
export const {
  setFilterAction,
  getListActionLoading,
  getListActionSuccess,
  getListActionError,
  getEditingItemActionLoading,
  getEditingItemActionSuccess,
  getEditingItemActionError,
  setEditingItemAction,
  updateItemAction,
  createItemAction,
  removeItemAction,
} = actions
