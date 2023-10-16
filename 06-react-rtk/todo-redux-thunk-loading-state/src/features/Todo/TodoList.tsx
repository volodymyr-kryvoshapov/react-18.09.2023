import {useEffect} from "react";
import {TodoI} from "./type";
import {TodoItem} from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "./store/thunk";

export function TodoList(): React.ReactElement {
  const list = useSelector((state: any) => state.todo.list)
  const loading = useSelector((state: any) => state.todo.listLoading)
  const error = useSelector((state: any) => state.todo.listError)
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getList())
  }, [getList])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div style={{ color: 'red'}}>{error.message}</div>
  }

  return (
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
  );
}
