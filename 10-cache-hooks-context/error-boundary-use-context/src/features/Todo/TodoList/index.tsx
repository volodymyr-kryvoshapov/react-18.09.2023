import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {Link} from "react-router-dom";
import {Page} from "../../../components/Page";
import {Filters} from "./Filters";
import {filteredTodoListSelector} from "../store/selectors";
import {getListActionRequest} from "../store/reducer";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useStyles} from "./styles";
import {useColumns} from "./useColumns";
import {ErrorBoundary} from "../../../components/ErrorBoundary";

export function TodoList(): React.ReactElement {
  const list = useAppSelector(filteredTodoListSelector)
  const loading = useAppSelector((state) => state.todo.listLoading)
  const error = useAppSelector((state) => state.todo.listError)
  const dispatch = useAppDispatch()
  const {columns} = useColumns();
  const {classes} = useStyles();

  useEffect(() => {
    dispatch(getListActionRequest())
  }, [dispatch, getListActionRequest])

  return (
    <Page
      title='Todo List'
      loading={loading}
      error={error}
    >
      <Stack spacing={2}>
        <Box className={classes.end}>
          <Link to="/todo/create">
            <Button size="small" variant="outlined">Create</Button>
          </Link>
          <ErrorBoundary>
            <Filters/>
          </ErrorBoundary>
        </Box>

        <Box sx={{height: 400, width: '100%'}}>
          <DataGrid
            rows={list}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
        </Box>
      </Stack>
    </Page>
  );
}
