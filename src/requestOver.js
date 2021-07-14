// JavaScript source code
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(battery, dateOfRequest, amount, expectedDelivery) {
  return { battery, dateOfRequest, amount, expectedDelivery };
}

const rows = [
  createData('Ford', '2021-06-30', 500.00, '2021-07-06'),
  createData('Ford', '2021-06-30', 500.00, '2021-07-06'),
  createData('Ford', '2021-06-30', 500.00, '2021-07-06'),
  createData('Ford', '2021-06-30', 500.00, '2021-07-06'),
  createData('Ford', '2021-06-30', 500.00, '2021-07-06'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
  <div className="Pickup">
  <header>
        <h1>Full Circle</h1>
      </header>

      <body>Request Overview</body>

  <header>
        <h3 align="left">Confirmed</h3>
   </header>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Batteries</TableCell>
            <TableCell align="right">Date of Request</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Expected Delivery</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.battery}
              </TableCell>
              <TableCell align="right">{row.dateOfRequest}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.expectedDelivery}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <header>
        <h3 align="left">Requests</h3>
   </header>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Batteries</TableCell>
            <TableCell align="right">Date of Request</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Expected Delivery</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.battery}
              </TableCell>
              <TableCell align="right">{row.dateOfRequest}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.expectedDelivery}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}