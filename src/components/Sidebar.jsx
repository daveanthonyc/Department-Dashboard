import { Box, Drawer, Typography, Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../state/global";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import StarsIcon from '@mui/icons-material/Stars';
import { useNavigate } from "react-router-dom";
import { data } from "./chartData";
import DashboardIcon from '@mui/icons-material/Dashboard';

function Sidebar() {
    const menuStatus = useSelector(state => state.isOpen)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttons = [
        {
            icon: <DashboardIcon sx={{width: "30px"}}/>,
            name: "Dashboard", 
            id: "dashboard",
        },
        {
            icon: <LooksOneIcon sx={{width: "30px"}}/>,
            name: "GROUP ONE", 
            id: "o1",
        },
        {
            icon: <LooksTwoIcon sx={{width: "30px"}}/>,
            name: "GROUP TWO", 
            id: "o2",
        },
        {
            icon: <StarsIcon sx={{width: "30px"}}/>, 
            name: "HWPL", 
            id: "hwpl",
        },
    ]
    
    return ( 
        <Drawer anchor="left" open={menuStatus} onClose={() => dispatch(closeMenu())}>
            <Box display="flex" justifyContent="center" >
                <img src="../src/assets/darkLogo.png" alt="" style={{ height: "100px", aspectRatio: 1, marginTop: "2rem"}} />
            </Box>
            <Box p={2} width="270px" textAlign='left' role='presentation'>
                <Typography color="primary.light" sx={{fontWeight: "500", fontSize: "0.8rem"}}>GENERAL</Typography>
                {
                    buttons.map((buttonData, index) => (
                        <Box display="flex" gap={1} alignItems="center" color="primary.dark" key={buttonData.id} paddingBlock={1} width={"100%"}>
                            <Button startIcon={buttonData.icon} sx={{color: "rgb(146, 151, 183)", '&:hover': {color: "#5569ff"}, justifyContent: "left"}} fullWidth onClick={() => navigate(`/${buttonData.id}`)}>
                                <Typography variant="body1" component="span" color="primary.dark"><strong>{buttonData.name}</strong></Typography>
                            </Button>
                        </Box>
                        ))
                }
            </Box>
        </Drawer>
     );
}

export default Sidebar;