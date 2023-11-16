import React from "react";
import {TodoI} from "./type";
import {useDispatch} from "react-redux";
import {removeItem} from "./store/thunks";
import {useTheme} from "../../components/ThemeContext";
import { Link } from "react-router-dom";

interface TodoItemPropsI {
  todo: TodoI;
}

export function TodoItem({todo}: TodoItemPropsI) {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  async function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (todo.id) {
      setError('')
      setLoading(true)

      try {
        // @ts-ignore
        await dispatch(removeItem(todo.id))
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td><input type='checkbox' checked={todo.done} onChange={() => {}} /></td>
      <td>
        <Link to={`/todo/edit/${todo.id}`}><button disabled={loading}>Edit</button></Link>
        <button onClick={onDeleteBtnClick} disabled={loading}>Delete</button>
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </td>
    </tr>
  )
}
