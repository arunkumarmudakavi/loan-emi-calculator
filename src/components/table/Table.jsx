import React, { useContext } from "react";
import {
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableHead,
  TableCell,
  Typography,
  Box,
  useTheme,
  
} from "@mui/material";
import { SelectCurrency } from "./SelectCurrency";
import { ResetTable } from "./ResetTable";
import { CurrencyContext } from "../../context/Context";

export const DataTable = ({ schedule, currency, emi }) => {
  const {setDisplayTable} = useContext(CurrencyContext)
  if (!schedule || schedule.length === 0) return null;

  const handleReset = () => {
    setDisplayTable(false)
  }
const theme = useTheme()
  return (
    <Box sx={{mx:20, color: theme.palette.primary.main}}>
    <Typography variant="h4" component="h4">
      Monthly EMI: ${emi.toFixed(2)}
    </Typography>
      <Box sx={{display:"flex", justifyContent:"space-between", my:"4dvh"}}>
      <SelectCurrency/>
      <ResetTable resetTable={handleReset}/>
      </Box>

      
        <TableContainer sx={{  maxHeight: 440, borderLeft:1, borderRight:1, borderColor:"gray" }}>
        <Typography variant="h5" component="h5" sx={{ m:2}}>
          Ammortization Schedule ({currency})
        </Typography>
          <Table stickyHeader aria-label="sticky table" sx={{width:"100%",}}>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: "25%" }}>Month</TableCell>
                <TableCell align="center" sx={{ width: "25%" }}>Principal</TableCell>
                <TableCell align="center" sx={{ width: "25%" }}>Interest</TableCell>
                <TableCell align="center" sx={{ width: "25%" }}>Remaining Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((data) => (
                <TableRow key={data.month}>
                  <TableCell align="center">{data.month}</TableCell>
                  <TableCell align="center">{data.principal.toFixed(2)} {currency}</TableCell>
                  <TableCell align="center">{data.interest.toFixed(2)} {currency}</TableCell>
                  <TableCell align="center">{data.balance.toFixed(2)} {currency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
    </Box>
  );
};
