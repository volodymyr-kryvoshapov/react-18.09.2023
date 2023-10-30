import {useEffect} from "react";
import {TodoI} from "./type";
import {TodoItem} from "./TodoItem";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Link} from "react-router-dom";
import {Page} from "../../components/Page";
import {Filters} from "./Filters";
import {filteredTodoListSelector} from "./store/selectors";
import {getListActionRequest} from "./store/reducer";

export function TodoList(): React.ReactElement {
  const list = useAppSelector(filteredTodoListSelector)
  const loading = useAppSelector((state) => state.todo.listLoading)
  const error = useAppSelector((state) => state.todo.listError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getListActionRequest())
  }, [dispatch, getListActionRequest])

  return (
    <Page
      title='Todo List'
      loading={loading}
      error={error}
    >
      <div>
        <Link to="/todo/create">
          <button>Create</button>
        </Link>
      </div>
      <Filters/>
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
        {list.map((todo: TodoI) => (
          <TodoItem
            todo={todo}
            key={todo.id}
          />
        ))}
        </tbody>
      </table>
    </Page>
  );
}
