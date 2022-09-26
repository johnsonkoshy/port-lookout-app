import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import data from "./statement_data";
import AddSOF from "./AddSOF";
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import * as React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 150
    },
    { field: "time", headerName: "Time", width: 150, type: "dateTime" },

    {
      field: "activity",
      headerName: "Activity",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      editable: true
      // renderCell: ({ value, hasFocus }) => {
      //   return <Link to="/details">{value}</Link>;
      // }
    },
    { field: "comment", headerName: "Comments", minWidth: 500 }
  ];

  return (
    <Box sx={{ height: 600, m: 2 }}>
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 1 }}>
        <AddSOF />
        <IconButton sx={{ m: 1 }}>
          <ContentCopyIcon></ContentCopyIcon>
        </IconButton>
      </Box>

      <TextField fullWidth label="Search" id="fullWidth" />

      <DataGrid
        rows={data}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
