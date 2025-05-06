import { Button } from '@mui/material'
import React from 'react'

export const ResetTable = ({resetTable}) => {
  
  return (
    <Button variant='outlined' onClick={resetTable}>Reset Table</Button>
  )
}
