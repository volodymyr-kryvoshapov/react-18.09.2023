import React, { useState, useCallback, useEffect } from 'react';
import { FetchClient } from './utils/FetchClient'

const URL = 'http://localhost:4000/todos/';

export const TodoApi = new FetchClient(URL);

function TodoList({ list }) {
  return (
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Done</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {list.map((todo) => (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td>{todo.done}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export function App({ filter }) {
  const [list, setList] = useState([])

  // 1. generates endless request loop
  const getList = useCallback(() => {
    TodoApi.getList(filter).then((todoList) => {
      setList(todoList)
    })
  }, [filter])

  useEffect(() => {
    getList()
  }, [getList])
  // Every reactive value must be declared as a dependency of your Effect
  // Problem: This dependency changes on every render

  return (<TodoList list={list} />);
}