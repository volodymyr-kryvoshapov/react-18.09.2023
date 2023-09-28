import {TodoI} from "./type";
import {TodoItem} from "./TodoItem";

interface TodoListPropsI {
  list: TodoI[];
  editTodo: (todo: TodoI) => void;
  deleteTodo: (id: number) => void;
}

export function TodoList({ list, deleteTodo, editTodo }: TodoListPropsI): React.ReactElement {
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
        {list.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </tbody>
    </table>
  );
}
