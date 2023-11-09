import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEditingItem, saveItem} from "./store/thunks";
import {useParams, useNavigate} from "react-router-dom";
import {editingTodoCombinedSelector} from "./store/selectors";
import {Page} from "../../components/Page";
import {DEFAULT_TODO, setEditingItemAction} from "./store/reducer";

export function FormEdit() {
  let {id} = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { editingTodo, editingTodoLoading, editingTodoError } = useSelector(editingTodoCombinedSelector)
  const [title, setTitle] = useState(editingTodo.title)
  const [done, setDone] = useState(editingTodo.done)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (id) {
      // @ts-ignore
      dispatch(getEditingItem(id))
    } else {
      dispatch(setEditingItemAction(DEFAULT_TODO))
    }
  }, [id]);

  useEffect(() => {
    setTitle(editingTodo.title)
    setDone(editingTodo.done)
  }, [editingTodo])

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTodo = {
      ...editingTodo,
      title,
      done,
    }

    setError('')
    setLoading(true)

    try {
      // @ts-ignore
      await dispatch(saveItem(newTodo))
      navigate("/todo");
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  // @ts-ignore
  return (
    <Page
      title='Edit Form'
      loading={editingTodoLoading}
      error={editingTodoError}
    >
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title"/>
        </div>

        <div>
          <label htmlFor="done">Done</label>
          <input checked={done} onChange={e => setDone(e.target.checked)} type="checkbox"
                 id="done"/>
        </div>

        <button type="submit" disabled={loading}>Submit</button>
      </form>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </Page>
  )
}