import Link from "@mui/material/Link";
import { Link as BrowswerLink } from "react-router-dom";
import * as React from "react";

export default [
  { field: "id", headerName: "Port ID", width: 70 },
  {
    field: "vesselName",
    headerName: "Vessel Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    editable: true,
    renderCell: ({ row, value, hasFocus }) => {
      return (
        <Link component={BrowswerLink} to={`/details/${row.id}`}>
          {value}
        </Link>
      );
    }
  },
  { field: "eta", headerName: "ETA", width: 150 },
  {
    field: "etb",
    headerName: "ETB",
    width: 150
  },
  {
    field: "etc",
    headerName: "ETC",
    width: 150
  },
  {
    field: "etd",
    headerName: "ETD",
    width: 150
  },
  {
    field: "cargo",
    headerName: "Cargo",
    width: 150
  },
  {
    field: "berth",
    headerName: "Berth",
    width: 150
  },
  {
    field: "port",
    headerName: "Port",
    width: 150
  },
  {
    field: "charterer",
    headerName: "Charterer",
    width: 150
  },
  {
    field: "agent",
    headerName: "Agent",
    width: 150
  }
];
