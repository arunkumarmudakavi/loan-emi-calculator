import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate();
    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "About",
            slug: "/about",
            active: true,
        },
        {
            name: "Exchange Rates",
            slug: "/exchange-rates",
            active: true,
        },
    ]
  return (
    <>
    {
        navItems.map((item) => item?.active ? (
            <Button onClick={() => navigate(item?.slug)}>{item?.name}</Button>
        ): null)
    }
    </>
  )
}
