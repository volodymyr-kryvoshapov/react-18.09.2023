import React, {useState} from "react";

interface FormEditProps {
  onTodoSubmit: any;
}

export function FormEdit({ onTodoSubmit }: FormEditProps) {
  const [title, setTitle] = useState('')
  const [done, setDone] = useState(false)

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onTodoSubmit({
      title,
      done,
    })

    setTitle('')
    setDone(false)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title" />
      </div>

      <div>
        <label htmlFor="done">Done</label>
        <input checked={done} onChange={e => setDone(e.target.checked)} type="checkbox" id="done" />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}