import { Button, TextField } from "@mui/material";

export const Home = () => {
  return (
    <section>
      <span>Loan EMI Calculator</span>
      <section>
        <TextField label="Loan Amount" variant="outlined" />
        <TextField label="Interest Rate (%)" variant="outlined" />
        <TextField label="Term (Years)" variant="outlined" />
      </section>
      <Button variant="contained">CALCULATE</Button>
    </section>
  );
};
