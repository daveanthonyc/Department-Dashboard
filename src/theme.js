import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#8890b5",
            dark: "#14256a",
            light: "#fff"
        },
        secondary: {
            main: "#4c6ef8", 
            secondary: "#eaf4ff",
            light: "#f8f9fa"
        },
        blueAccent: "rgb(80, 143, 244)",
        yellowAccent: "rgb(255, 191, 67)",
        greenAccent: "rgb(75, 230, 157)",
        purpleAccent: "rgb(146, 103, 255)",
    },
    typography: {
        fontFamily: "Comfortaa, sans-serif",
        fontSize: 12,
    }
})