import {
  ACTION_TODO_CREATE_ITEM,
  ACTION_TODO_REMOVE_ITEM,
  ACTION_TODO_SET_EDITING_ITEM,
  ACTION_TODO_SET_LIST,
  ACTION_TODO_UPDATE_ITEM,
} from './actions'
import {TodoI} from "../type";

const DEFAULT_TODO: TodoI = {
  title: '',
  done: false,
}
interface INITIAL_STATE_I {
  editingTodo: TodoI,
  list: TodoI[],
}

const INITIAL_STATE: INITIAL_STATE_I = {
  editingTodo: DEFAULT_TODO,
  list: [],
}

export const reducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TODO_CREATE_ITEM:
      return {...state, list: [...state.list, payload]}
    case ACTION_TODO_REMOVE_ITEM:
      return {...state, list: state.list.filter((todo: TodoI) => todo.id !== payload)}
    case ACTION_TODO_SET_EDITING_ITEM:
      return {...state, editingTodo: payload}
    case ACTION_TODO_SET_LIST:
      return {...state, list: payload}
    case ACTION_TODO_UPDATE_ITEM:
      return {...state, list: state.list.map((todo: TodoI) => todo.id === payload.id ? payload : todo)}
    default:
      return state
  }
}