export const ACTION_COUNTER_SET = 'SET'
export const ACTION_COUNTER_INC = 'INC'
export const ACTION_COUNTER_DEC = 'DEC'

export function setAction (count: number) {
  return { type: ACTION_COUNTER_SET, count }
}

export function incAction () {
  return { type: ACTION_COUNTER_INC }
}

export function decAction () {
  return { type: ACTION_COUNTER_DEC }
}
