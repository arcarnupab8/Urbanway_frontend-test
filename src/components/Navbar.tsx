import React from 'react'

import ReactLogo from '../assets/react.svg'

import { Avatar, Stack, Typography } from '@mui/material'

type Myprops = {
  onLogoClick?: () => void;
}

const Navbar: React.FC<Myprops> = (props) => {

  return (
    <Stack
        sx={{
            backgroundColor: "#fff",
            width: "100%",
            margin: "0 auto",
            padding: "8px 0",
        }}
    >
        <Stack
            direction="row"
            gap={2}
            alignItems="center"
            sx={{
                width: "200px",
                margin: "0 16px",
                cursor: props.onLogoClick ? 'pointer' : 'default'
            }}
            onClick={props.onLogoClick}
        >
            <Avatar
                alt = "Urbanway Logo"
                src = {ReactLogo}
                sx={{ 
                    width: 50, 
                    height: 50,
                }}
            />
            <Typography 
                variant="h6"
            >
                Urbanway
            </Typography>
        </Stack>
    </Stack>
  )
}

export default Navbar