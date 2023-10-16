import { Provider } from "react-redux";
import {TodoApp} from "./features/Todo";
import { store } from "./store";
import React from "react";
import {ThemeProvider} from "./components/ThemeContext";

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </Provider>
  );
}
