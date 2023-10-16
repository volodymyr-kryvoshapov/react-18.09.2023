import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TodoI} from "../type";

const DEFAULT_TODO: TodoI = {
  title: '',
  done: false,
}
interface TodoStateI {
  editingTodo: TodoI,
  list: TodoI[],
  listLoading: boolean,
  listError?: Error,
}

const initialState: TodoStateI = {
  editingTodo: DEFAULT_TODO,
  list: [],
  listLoading: false,
  listError: undefined,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getListActionLoading: (state: TodoStateI) => {
      state.listLoading = true
      state.listError = undefined
    },
    getListActionSuccess: (state: TodoStateI, action: PayloadAction<TodoI[]>) => {
      state.list = action.payload
      state.listLoading = false
    },
    getListActionError: (state: TodoStateI, action: PayloadAction<Error>) => {
      state.listError = action.payload
      state.listLoading = false
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
  getListActionLoading,
  getListActionSuccess,
  getListActionError,
  setEditingItemAction,
  updateItemAction,
  createItemAction,
  removeItemAction,
} = actions
