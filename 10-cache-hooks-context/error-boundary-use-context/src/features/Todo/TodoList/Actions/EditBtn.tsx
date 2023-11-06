import React from "react";
import {Link} from "react-router-dom";
import {TodoI} from "../../type";
import Button from '@mui/material/Button';
import {useLang} from "../../../../components/LanguageProvider";

export function EditBtn({todo}: { todo: TodoI }) {
  const {translate} = useLang();

  return (
    <Link to={`/todo/edit/${todo.id}`}>
      <Button>{translate('Edit', 'Редагувати')}</Button>
    </Link>
  )
}
