import { CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material'
import { theme } from './theme'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './scenes/layout'
import Dashboard from './scenes/dashboard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
