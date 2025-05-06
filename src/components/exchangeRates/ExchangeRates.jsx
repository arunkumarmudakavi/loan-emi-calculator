import React, { useEffect, useState } from "react";
import { useGet } from "../../hooks/useGet";
import { List, ListItem, ListItemText, Grid, Typography, useTheme, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ExchangeRates = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL_ENDPOINT = `https://v6.exchangerate-api.com/v6/${
    import.meta.env.VITE_EXCHANGE_RATES_API_KEY
  }/latest/USD`;

  const theme = useTheme();
  const navigate = useNavigate()

  useEffect(() => {
    useGet(URL_ENDPOINT)
      .then((res) => {
        console.log(res);
        setData(res?.data?.conversion_rates);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch exchange rates");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Box sx={{height: "95dvh", display: "flex", justifyContent:"center", alignItems:"center"}}><CircularProgress/></Box>;
  }

  if (error) {
    return navigator("/error");
  }

  if (!data) {
    return navigator("/error");
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
      sx={{ mx: 8, pt: 2, color: theme.palette.primary.main}}
    >
      {Object.entries(data).map(([currency, price]) => (
        <Grid key={currency} size={{ xs: 1, sm: 4, md: 4 }}>
          <Typography variant="h4">
            {currency}: {price}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
