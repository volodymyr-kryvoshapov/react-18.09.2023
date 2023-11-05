import React from "react";
import {Link} from "react-router-dom";
import {TodoI} from "../../type";
import Button from '@mui/material/Button';

export function EditBtn({todo}: { todo: TodoI }) {
  return <Link to={`/todo/edit/${todo.id}`}>
    <Button>Edit</Button>
  </Link>
}
