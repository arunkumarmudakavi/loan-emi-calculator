import { Box, Button, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
    const navigate = useNavigate();
    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Exchange Rates",
            slug: "/exchange-rates",
            active: true,
        },
    ]
    const theme = useTheme()
  return (
    <Box sx={{bgcolor:theme.palette.background.default, color:theme.palette.primary.main}} >
    {
        navItems.map((item) => item?.active ? (
            <Button sx={{fontSize: 20}} key={item?.name} onClick={() => navigate(item?.slug)}>{item?.name}</Button>
        ): null)
    }
    <ThemeSwitcher/>
    </Box>
  )
}
