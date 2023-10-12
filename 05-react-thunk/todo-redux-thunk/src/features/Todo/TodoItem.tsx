import React from "react";
import {TodoI} from "./type";
import {useDispatch} from "react-redux";
import {setEditingItemAction} from "./store/actions";
import {removeItem} from "./store/thunk";
import {ThemeContext} from "../../components/ThemeContext";

interface TodoItemPropsI {
  todo: TodoI;
}

export function TodoItem({todo}: TodoItemPropsI) {
  const dispatch = useDispatch()
  const theme = React.useContext(ThemeContext)

  function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(setEditingItemAction(todo))
  }

  function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (todo.id) {
      // @ts-ignore
      dispatch(removeItem(todo.id))
    }
  }

  return (
    <tr>
      <td>{todo.id} {theme}</td>
      <td>{todo.title}</td>
      <td>{todo.done}</td>
      <td>
        <button onClick={onEditBtnClick}>Edit</button>
        <button onClick={onDeleteBtnClick}>Delete</button>
      </td>
    </tr>
  )
}
