import { AppBar, Toolbar, Typography, Button, CssBaseline, Box } from '@mui/material'

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
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2 }}>
        <Button variant="contained">One</Button>
        <Button variant="contained">Two</Button>
        <Button variant="contained">Three</Button>
      </Box>
    </>
  )
}

export default App
