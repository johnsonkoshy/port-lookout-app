import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import data from "./statement_data";
import * as React from "react";

export default function Home() {
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
      <TextField fullWidth label="Search" id="fullWidth" />

      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
