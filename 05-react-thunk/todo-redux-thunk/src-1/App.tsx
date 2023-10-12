import { Provider } from "react-redux";
import {TodoApp} from "./features/Todo";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
