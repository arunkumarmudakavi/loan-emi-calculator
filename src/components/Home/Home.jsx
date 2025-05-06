import { Button, TextField, Box, Typography } from "@mui/material";
import { useCalculateEMI } from "../../hooks/useCalculation";
import { useContext, useEffect, useState } from "react";
import { DataTable } from "../table/Table";
import { CurrencyContext } from "../../context/Context";

export const Home = () => {
  const [amount, setAmount] = useState()
  const [emi, setEMI] = useState()
  const [rate, setRate] = useState()
  const [year, setYear] = useState()
  const [schedule, setSchedule] = useState([])
  const [displayTable, setDisplayTable] = useState(false)
  
  const {currency} = useContext(CurrencyContext)
  useEffect(() => {
    setDisplayTable(true)
    const {EMI, schedule} = useCalculateEMI(amount, rate, year);
    setSchedule(schedule)
    setEMI(EMI)
  }, [currency])

  
  const handleCalculate = () => {
    setDisplayTable(true)
    const {EMI, schedule} = useCalculateEMI(amount, rate, year);
    console.log(EMI);
    console.log(schedule);
    setSchedule(schedule)
    
    console.log({ amount, rate, year });
  };

  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        p: 4,
        m: 4,
      }}
    >
      <Typography variant="h3" component="h1">
        Loan EMI Calculator
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "80%",
        }}
      >
        <TextField
          label="Loan Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Interest Rate (%)"
          variant="outlined"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Term (Years)"
          variant="outlined"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          fullWidth
        />
      </Box>
      <Button variant="contained" onClick={handleCalculate}>
        CALCULATE
      </Button>
    </Box>
    <Typography>
      Monthly EMI: ${emi.toFixed(2)}
    </Typography>
        {
          (displayTable) ? (<DataTable schedule={schedule} currency={currency}/>) : (null)
        }
    </>
  );
};
