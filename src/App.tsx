import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Stack } from '@mui/material'
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar, { type MenuList_type } from './components/Sidebar'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import History from './pages/History';

const MenuList: MenuList_type[] = [
    {
        text: "หน้าแรก",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        text: "รายการเบิกถอน",
        icon: <HistoryIcon />,
        path: "/history"
    }
]

function App() {
  const [ sidebarOpen, setSidebarOpen ] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleMenuClick = (index: number) => {
    const path = MenuList[index].path;
    if (path) {
      navigate(path);
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Stack sx={{ height: '100vh', flexDirection: 'column' }}>
      <Navbar 
        onLogoClick={toggleSidebar}
      />

      <Stack
        direction="row"
        sx={{ 
          flexGrow: 1, 
          alignItems: 'stretch',
          minHeight: 0,
        }}
      >
        <Sidebar
          menuList={MenuList}
          value={MenuList.findIndex(menu => menu.path === window.location.pathname)}
          open={sidebarOpen}
          onClick={handleMenuClick}
          toggleSidebar={toggleSidebar}
        />

        <Stack
          sx={{
            flexGrow: 1,
            padding: 2,
            minHeight: 0,
            overflowY: 'auto',
          }}
        >
          {/* Main content goes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default App
