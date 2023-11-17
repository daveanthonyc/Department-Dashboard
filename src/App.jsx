import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./scenes/layout"
import Dashboard from "./scenes/dashboard"
import { CssBaseline, Box } from "@mui/material"
import GroupOne from './scenes/O1'
import GroupTwo from './scenes/O2'
import HWPL from './scenes/HWPL'
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { api } from "./state/api"

function App() {
  return (
    <ApiProvider api={api}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100vw" height="100%">
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/o1" element={<GroupOne />} />
                <Route path="/o2" element={<GroupTwo />} />
                <Route path="/hwpl" element={<HWPL />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </ApiProvider>
  )
}

export default App
