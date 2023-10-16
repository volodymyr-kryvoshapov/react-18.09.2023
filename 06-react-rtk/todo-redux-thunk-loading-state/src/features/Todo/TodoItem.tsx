import React from "react";
import {TodoI} from "./type";
import {useDispatch} from "react-redux";
import {setEditingItemAction} from "./store/actions";
import {removeItem} from "./store/thunk";
import {ThemeContext} from "../../components/ThemeContext";

interface TodoItemPropsI {
  todo: TodoI;
}

export function TodoItem({todo}: TodoItemPropsI) {
  const dispatch = useDispatch()
  const theme = React.useContext(ThemeContext)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(setEditingItemAction(todo))
  }

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
      <td>{todo.id} {theme}</td>
      <td>{todo.title}</td>
      <td>{todo.done}</td>
      <td>
        <button onClick={onEditBtnClick} disabled={loading}>Edit</button>
        <button onClick={onDeleteBtnClick} disabled={loading}>Delete</button>
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </td>
    </tr>
  )
}
