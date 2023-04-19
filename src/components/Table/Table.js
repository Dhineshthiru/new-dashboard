import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Cadbury Dairy Milk", 18908422, "2 March 2022", "Approved"),
  createData(`Fogg Bodyspray "Royal"`, 18908427, "7 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "21 June 2022", "Approved"),
  createData("Nivea Men Facewash", 18908421, "15 Aug 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
      cursor: "pointer",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
      cursor: "pointer",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          striped
          hover
          bordered
          variant="dark"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Product</b>
              </TableCell>
              <TableCell align="left">
                <b>Tracking ID</b>
              </TableCell>
              <TableCell align="left">
                <b>Date</b>
              </TableCell>
              <TableCell align="left">
                <b>Status</b>
              </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                striped
                bordered
                hover
                variant="dark"
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell
                  align="left"
                  style={{ cursor: "pointer" }}
                  className="Details"
                >
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
