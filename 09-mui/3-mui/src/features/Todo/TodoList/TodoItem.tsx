import React from "react";
import {TodoI} from "../type";
import { Link } from "react-router-dom";
import {useAppDispatch} from "../../../hooks";
import {removeItemRequest} from "../store/reducer";

interface TodoItemPropsI {
  todo: TodoI;
}

export function TodoItem({todo}: TodoItemPropsI) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td><input type='checkbox' checked={todo.done} onChange={() => {}} /></td>
      <td>
        <Link to={`/todo/edit/${todo.id}`}><button>Edit</button></Link>
        <DeleteBtn todo={todo} />
      </td>
    </tr>
  )
}

function DeleteBtn({ todo }: { todo: TodoI }) {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  async function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (todo.id) {
      setError('')
      setLoading(true)

      try {
        await new Promise((resolve, reject) => dispatch(removeItemRequest(todo.id!, resolve, reject)))
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <>
      <button onClick={onDeleteBtnClick} disabled={loading}>Delete</button>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  )
}
