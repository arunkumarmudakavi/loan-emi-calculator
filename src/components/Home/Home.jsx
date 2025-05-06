import { Button, TextField, Box, Typography, useTheme } from "@mui/material";
import { useCalculateEMI } from "../../hooks/useCalculation";
import { useContext, useEffect, useState } from "react";
import { DataTable } from "../table/Table";
import { CurrencyContext } from "../../context/Context";

export const Home = () => {
  const [amount, setAmount] = useState(null);
  const [emi, setEMI] = useState(null);
  const [rate, setRate] = useState(null);
  const [year, setYear] = useState(null);
  const [schedule, setSchedule] = useState([]);


  const { currency, displayTable, setDisplayTable } = useContext(CurrencyContext);

  useEffect(() => {
    setDisplayTable(true);
    const { EMI, schedule } = useCalculateEMI(amount, rate, year);
    setSchedule(schedule);
    setEMI(EMI);
  }, [currency]);

  const handleCalculate = () => {
    setDisplayTable(true);
    const { EMI, schedule } = useCalculateEMI(amount, rate, year);
    setEMI(EMI);
    setSchedule(schedule);
  };
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          p: 4,

        }}
      >
        <Typography variant="h3" component="h1" sx={{color: theme.palette.primary.main}}>
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

      {displayTable && (
        <DataTable schedule={schedule} currency={currency} emi={emi} />
      ) }
    </>
  );
};
