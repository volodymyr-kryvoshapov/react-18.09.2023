import {TodoI} from "../../type";
import {useAppDispatch} from "../../../../hooks";
import React from "react";
import {removeItemRequest} from "../../store/reducer";
import Button from '@mui/material/Button';

export function DeleteBtn({ todo }: { todo: TodoI }) {
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
      <Button color="error" onClick={onDeleteBtnClick} disabled={loading}>Delete</Button>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  )
}
