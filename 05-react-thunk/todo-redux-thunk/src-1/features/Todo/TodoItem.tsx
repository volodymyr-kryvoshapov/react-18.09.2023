import {TodoI} from "./type";

interface TodoItemPropsI {
  todo: TodoI;
  editTodo: (todo: TodoI) => void;
  deleteTodo: (id: number) => void;
}

export function TodoItem({ todo, deleteTodo, editTodo }: TodoItemPropsI) {
  function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    editTodo(todo)
  }

  function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (todo.id) {
      deleteTodo(todo.id)
    }
  }

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.done}</td>
      <td>
        <button onClick={onEditBtnClick}>Edit</button>
        <button onClick={onDeleteBtnClick}>Delete</button>
      </td>
    </tr>
  )
}
