import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import {EditBtn} from "./Actions/EditBtn";
import {DeleteBtn} from "./Actions/DeleteBtn";
import {TodoI} from "../type";
import Checkbox from '@mui/material/Checkbox';

export function useColumns() {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 2,
    },
    {
      field: 'done',
      headerName: 'Done',
      renderCell: (params: GridRenderCellParams<TodoI>) => (
        <Checkbox checked={params.row.done || false}/>
      ),
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      renderCell: (params: GridRenderCellParams<TodoI>) => (
        <Stack spacing={2} direction="row">
          <EditBtn todo={params.row}/>
          <DeleteBtn todo={params.row}/>
        </Stack>
      ),
      flex: 1,
    },
  ];

  return {
    columns,
  }
}