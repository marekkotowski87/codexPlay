import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
} from '@mui/material'
import BottomNav from './components/BottomNav'

function App() {

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
      <BottomNav />
    </>
  )
}

export default App
