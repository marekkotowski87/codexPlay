import { useState, type SyntheticEvent } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/TravelExplore'
import SettingsIcon from '@mui/icons-material/Settings'

function BottomNav() {
  const [value, setValue] = useState(0)

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event: SyntheticEvent, newValue: number) => setValue(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav
