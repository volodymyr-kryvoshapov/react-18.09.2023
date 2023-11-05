import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEditingItem, saveItem} from "./store/thunks";
import {useParams, useNavigate} from "react-router-dom";
import {editingTodoCombinedSelector} from "./store/selectors";
import {Page} from "../../components/Page";
import {DEFAULT_TODO, setEditingItemAction} from "./store/reducer";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export function FormEdit() {
  let {id} = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {
    editingTodo,
    editingTodoLoading,
    editingTodoError
  } = useSelector(editingTodoCombinedSelector)
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
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Paper
          sx={{
            padding: '10px',
            width: '50ch',
          }}
        >
          <Stack
            component="form"
            spacing={2}
            noValidate
            autoComplete="off"
            onSubmit={onFormSubmit}
          >
            <TextField
              required
              id="title"
              label="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <FormControlLabel
              control={(
                <Checkbox
                  checked={done}
                  onChange={e => setDone(e.target.checked)}
                />
              )}
              label="Done"
            />

            <Button type="submit" disabled={loading} variant="outlined">Submit</Button>
          </Stack>

          {error && <div style={{color: 'red'}}>{error}</div>}
        </Paper>
      </Box>
    </Page>
  )
}