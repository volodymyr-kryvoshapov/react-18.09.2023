import React from 'react';
import ReactDOM from 'react-dom/client';
import {TodoApp} from "./features/todo";
// import { Clock } from './features/clock';
// import { ClockF } from './features/clock-f';

const App = () => {
  return <TodoApp />;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
