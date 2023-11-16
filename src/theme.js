import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FFF",
            dark: "rgb(34, 51, 84)",
            medium: "rgb(110, 117, 159)",
            light: "rgb(146, 151, 183)",
        },
        secondary: {
            main: "rgb(190, 198, 255)", 
            light: "rgb(242, 245, 249)",
        },
        purpleAccent: "#5569ff",
        yellowAccent: "rgb(255, 191, 67)",
        greenAccent: "rgb(87, 202, 34)",
        redAccent: "rgb(255, 25, 67)"
    },
    typography: {
        fontFamily: 'inter, sans-serif', 
        fontSize: 12,
    }
})