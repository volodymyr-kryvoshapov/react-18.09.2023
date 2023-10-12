import {
  ACTION_TODO_CREATE_ITEM,
  ACTION_TODO_REMOVE_ITEM,
  ACTION_TODO_SET_EDITING_ITEM,
  ACTION_TODO_UPDATE_ITEM,
  ACTION_TODO_GET_LIST_SUCCESS,
  ACTION_TODO_GET_LIST_LOADING,
  ACTION_TODO_GET_LIST_ERROR,
} from './actions'
import {TodoI} from "../type";

const DEFAULT_TODO: TodoI = {
  title: '',
  done: false,
}
interface INITIAL_STATE_I {
  editingTodo: TodoI,
  list: TodoI[],
  listLoading: boolean,
  listError?: Error,
}

const INITIAL_STATE: INITIAL_STATE_I = {
  editingTodo: DEFAULT_TODO,
  list: [],
  listLoading: false,
  listError: undefined,
}

export const reducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TODO_GET_LIST_LOADING:
      return {...state, list: payload, listLoading: true, listError: undefined}
    case ACTION_TODO_GET_LIST_SUCCESS:
      return {...state, list: payload, listLoading: false}
    case ACTION_TODO_GET_LIST_ERROR:
      return {...state, list: [], listError: payload, listLoading: false}
    case ACTION_TODO_CREATE_ITEM:
      return {
        ...state,
        list: [...state.list, payload],
        editingTodo: { ...DEFAULT_TODO },
      }
    case ACTION_TODO_REMOVE_ITEM:
      return {...state, list: state.list.filter((todo: TodoI) => todo.id !== payload)}
    case ACTION_TODO_SET_EDITING_ITEM:
      return {...state, editingTodo: payload}
    case ACTION_TODO_UPDATE_ITEM:
      return {
        ...state,
        list: state.list.map((todo: TodoI) => todo.id === payload.id ? payload : todo),
        editingTodo: DEFAULT_TODO,
      }
    default:
      return state
  }
}