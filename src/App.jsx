import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./scenes/layout"
import Dashboard from "./scenes/dashboard"
import { CssBaseline, Box } from "@mui/material"
import GroupOne from './scenes/O1'
import GroupTwo from './scenes/O2'
import HWPL from './scenes/HWPL'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="100vw" height="100%">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/O1" element={<GroupOne />} />
              <Route path="/O2" element={<GroupTwo />} />
              <Route path="/HWPL" element={<HWPL />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
