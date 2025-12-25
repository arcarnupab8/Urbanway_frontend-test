import React from 'react'
import { Stack, Typography } from '@mui/material'

///// Type /////
export type MenuList_type = {
    text?: string;
    path?: string; 
    icon: React.ReactNode;
} 

///// Interface /////
interface Myprops {
    menuList: MenuList_type[];
    value?: number;
    open?: boolean;
    onClick?: (index: number) => void;
    toggleSidebar?: () => void;
}

const Sidebar: React.FC<Myprops> = (props) => {
  const { menuList, value, open = true, onClick, toggleSidebar } = props;

  return (
    <Stack
        sx={{
            width: open ? "240px" : "0px",
            minWidth: open ? "200px" : 0,
            height: "100%",
            minHeight: "calc(100vh - 80px)",
            backgroundColor: "#fff",
            padding: open ? "16px" : "0px",
            boxSizing: "border-box",
            gap: open ? 2 : 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            transition: 'width 180ms ease, padding 180ms ease',
        }}
        onClick={toggleSidebar}
    >
        {menuList.map((menu, index) => (
            <Stack
                key={index}
                onClick={() => onClick?.(index)}
                sx={{
                    display: open ? 'flex' : 'none',
                    backgroundColor: value === index ? "#007bff" : "transparent",
                    color: value === index ? "#fff" : "#000",
                    padding: "12px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                }}
            >
                {menu.icon}
                <Typography 
                    variant="body1" 
                    sx={{ marginLeft: 2 }}
                >
                    {menu.text}
                </Typography>
            </Stack>
        ))}
    </Stack>
  )
}

export default Sidebar