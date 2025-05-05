import { Button, Switch } from '@mui/material'
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
            name: "Exchange Rates",
            slug: "/exchange-rates",
            active: true,
        },
    ]
  return (
    <section >
    {
        navItems.map((item) => item?.active ? (
            <Button key={item?.name} onClick={() => navigate(item?.slug)}>{item?.name}</Button>
        ): null)
    }
    <Switch/>
    </section>
  )
}
