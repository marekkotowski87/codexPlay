import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/TravelExplore'
import SettingsIcon from '@mui/icons-material/Settings'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CodexPlay
          </Typography>
          <Button color="inherit">Log in</Button>
        </Toolbar>
      </AppBar>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  )
}

export default App
