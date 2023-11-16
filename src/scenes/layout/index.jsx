import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Layout() {
    return ( <Box >
       <Navbar></Navbar> 
       <Sidebar></Sidebar>
       <Outlet />
    </Box> );
}

export default Layout;