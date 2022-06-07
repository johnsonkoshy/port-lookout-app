import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import port_data from "./port_data";
import columns from "./columns";
export default function Home() {
  return (
    <Box sx={{ height: 700, m: 2 }}>
      <TextField fullWidth label="Search" id="search" />

      <DataGrid
        rows={port_data}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ borderRadius: 0 }}
      />
    </Box>
  );
}
