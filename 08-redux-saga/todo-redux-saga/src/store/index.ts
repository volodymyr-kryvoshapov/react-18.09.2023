import {configureStore} from '@reduxjs/toolkit'
import {reducer as todoReducer} from "../features/Todo/store/reducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch