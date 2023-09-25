import {Todo} from "./type";
import {TodoItem} from "./TodoItem";

interface TodoListProps {
  list: Todo[];
}

export function TodoList({ list }: TodoListProps): React.ReactElement {
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
        {list.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
      </tbody>
    </table>
  );
}
