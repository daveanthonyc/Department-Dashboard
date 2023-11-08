import './App.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './scenes/dashboard'
import Layout from './scenes/layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
