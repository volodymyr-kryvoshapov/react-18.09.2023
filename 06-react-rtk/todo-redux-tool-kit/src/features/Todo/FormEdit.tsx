import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveItem} from "./store/thunks";

export function FormEdit() {
  const dispatch = useDispatch()
  const todo = useSelector((state: any) => state.todo.editingTodo)
  const [title, setTitle] = useState(todo.title)
  const [done, setDone] = useState(todo.done)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setTitle(todo.title)
    setDone(todo.done)
  }, [todo])

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTodo = {
      ...todo,
      title,
      done,
    }

    setError('')
    setLoading(true)

    try {
      // @ts-ignore
      await dispatch(saveItem(newTodo))
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title"/>
        </div>

        <div>
          <label htmlFor="done">Done</label>
          <input checked={done} onChange={e => setDone(e.target.checked)} type="checkbox" id="done"/>
        </div>

        <button type="submit" disabled={loading}>Submit</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  )
}