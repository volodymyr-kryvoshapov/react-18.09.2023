import {useEffect} from "react";
import {TodoI} from "./type";
import {TodoItem} from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "./store/thunks";
import { Link } from "react-router-dom";
import {Page} from "../../components/Page";
import {RootState} from "../../store";
import {Filters} from "./Filters";
import {filteredTodoListSelector} from "./store/selectors";

export function TodoList(): React.ReactElement {
  const list = useSelector(filteredTodoListSelector)
  const loading = useSelector((state: RootState) => state.todo.listLoading)
  const error = useSelector((state: RootState) => state.todo.listError)
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getList())
  }, [getList])

  return (
    <Page
      title='Todo List'
      loading={loading}
      error={error}
    >
      <div>
        <Link to="/todo/create"><button>Create</button></Link>
      </div>
      <Filters />
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
