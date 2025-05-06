import { FormControl,
    InputLabel,
    Select,
    MenuItem, } from '@mui/material'
import React, { useContext, useState } from 'react'
import {CurrencyContext} from "../../context/Context.js"

export const SelectCurrency = () => {
    const {currency, setCurrency} = useContext(CurrencyContext)
    
    const handleChange = (e) => {
        console.log(e.target.value);
        setCurrency(e.target.value)
        
    }
  return (
    <>
        <FormControl sx={{width:{ xs: "20vw", sm: "30vw", md: "8dvw" }}}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="USD"
          value={currency}
          onChange={handleChange}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="JPY">JPY</MenuItem>
          <MenuItem value="AUD">AUD</MenuItem>
          <MenuItem value="CAD">CAD</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
