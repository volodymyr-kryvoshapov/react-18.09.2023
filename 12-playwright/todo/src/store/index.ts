import { configureStore } from '@reduxjs/toolkit'
import {reducer as todoReducer} from "../features/Todo/store/reducer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch