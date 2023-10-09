import { createStore } from 'redux'

const ACTION_COUNTER_SET = 'SET'
const ACTION_COUNTER_INC = 'INC'
const ACTION_COUNTER_DEC = 'DEC'
const INITIAL_STATE = {
  count: 0
}

const rootReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_COUNTER_SET: return { ...state, count: payload }
    case ACTION_COUNTER_INC: return { ...state, count: state.count + 1 }
    case ACTION_COUNTER_DEC: return { ...state, count: state.count - 1 }
    default: return state
  }
}

const store = createStore(rootReducer)

function setAction (count) {
  return { type: ACTION_COUNTER_SET, payload: count }
}

function incAction () {
  return { type: ACTION_COUNTER_INC }
}

function decAction () {
  return { type: ACTION_COUNTER_DEC }
}

store.dispatch(setAction(1))
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(decAction())

console.log(store.getState()) // { count: 8 }