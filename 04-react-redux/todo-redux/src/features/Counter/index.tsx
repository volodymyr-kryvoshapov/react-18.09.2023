import React, { ReactElement } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  decAction,
  incAction,
  setAction,
} from "./store/actions";

export function Counter(): ReactElement {
  const [num, setNum] = React.useState<number>(0);
  const count = useSelector((state: any) => state.counter.count); // { counter: { count: 0 } }
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>

      <label htmlFor='setCount'>Set</label>
      <input id='setCount' type='number' value={num} onChange={(e) => setNum(Number(e.target.value))}/>

      <button onClick={() => dispatch(setAction(num))}>Set</button>
      <button onClick={() => dispatch(incAction())}>Increment</button>
      <button onClick={() => dispatch(decAction())}>Decrement</button>
    </div>
  );
}