import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveItem} from "./store/thunk";

export function FormEdit() {
  const dispatch = useDispatch()
  const todo = useSelector((state: any) => state.todo.editingTodo)
  const [title, setTitle] = useState(todo.title)
  const [done, setDone] = useState(todo.done)

  useEffect(() => {
    setTitle(todo.title)
    setDone(todo.done)
  }, [todo])

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTodo = {
      ...todo,
      title,
      done,
    }

    // @ts-ignore
    dispatch(saveItem(newTodo))
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title"/>
      </div>

      <div>
        <label htmlFor="done">Done</label>
        <input checked={done} onChange={e => setDone(e.target.checked)} type="checkbox" id="done"/>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}