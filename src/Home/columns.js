import Link from "@mui/material/Link";
import { Link as BrowswerLink } from "react-router-dom";
export default [
  { field: "id", headerName: "Port ID", width: 70 },
  {
    field: "shipName",
    headerName: "Ship",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    editable: true,
    renderCell: ({ value, hasFocus }) => {
      return (
        <Link component={BrowswerLink} to="/details">
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
