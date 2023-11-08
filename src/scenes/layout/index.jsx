import { Typography, Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import Navbar from 'components/Navbar'

function Layout() {
    return ( <Box width={"100%"} height="100%">
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    </Box> );
}

export default Layout;