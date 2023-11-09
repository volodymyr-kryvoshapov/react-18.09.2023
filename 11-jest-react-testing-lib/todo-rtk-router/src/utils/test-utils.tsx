import '@testing-library/jest-dom'
import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "../components/ThemeContext";
import {configureStore} from "@reduxjs/toolkit";
import {reducer as todoReducer} from "../features/Todo/store/reducer";

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
  })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}