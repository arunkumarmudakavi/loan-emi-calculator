import React, { useContext } from "react";
import {
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableHead,
  TableCell,
  Typography,
  
} from "@mui/material";
import { SelectCurrency } from "./SelectCurrency";
import { ResetTable } from "./ResetTable";

export const DataTable = ({ schedule, currency }) => {
  
  
  
  if (!schedule || schedule.length === 0) return null;


  return (
    <>
      <SelectCurrency/>
      <ResetTable/>

      <div>
        <Typography variant="h5" component="h5">
          Ammortization Schedule
        </Typography>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell>Principal</TableCell>
                <TableCell>Interest</TableCell>
                <TableCell>Remaining Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((data) => (
                <TableRow key={data.month}>
                  <TableCell>{data.month}</TableCell>
                  <TableCell>{data.principal.toFixed(2)} {currency}</TableCell>
                  <TableCell>{data.interest.toFixed(2)} {currency}</TableCell>
                  <TableCell>{data.balance.toFixed(2)} {currency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
