import { Provider } from "react-redux";
// import {TodoApp} from "./features/Todo";
import { Counter } from "./features/Counter";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
