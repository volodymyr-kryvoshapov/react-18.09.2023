import {ACTION_COUNTER_DEC, ACTION_COUNTER_INC, ACTION_COUNTER_SET} from './actions'

const INITIAL_STATE = {
  count: 1
}

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ACTION_COUNTER_SET:
      return {...state, count: action.count}
    case ACTION_COUNTER_INC:
      return {...state, count: state.count + 1}
    case ACTION_COUNTER_DEC:
      return {...state, count: state.count - 1}
    default:
      return state
  }
}