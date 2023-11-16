import { Box, Drawer, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../state/global";

function Sidebar() {
    const menuStatus = useSelector(state => state.isOpen)
    const dispatch = useDispatch();
    
    return ( 
        <Drawer anchor="left" open={menuStatus} onClose={() => dispatch(closeMenu())}>
            <Box display="flex" justifyContent="center" >
                <img src="../src/assets/darkLogo.png" alt="" style={{ height: "100px", aspectRatio: 1 }} />
            </Box>
            <Box p={2} width="270px" textAlign='center' role='presentation'>
                <Typography variant="h6" component='div'>
                    Welcome to your dashboard
                </Typography>
            </Box>
        </Drawer>
     );
}

export default Sidebar;