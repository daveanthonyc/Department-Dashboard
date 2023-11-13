import { Box, Typography, AppBar, Toolbar, Stack, IconButton, InputBase, Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return ( <AppBar>
        <Toolbar sx={{backgroundColor: "secondary.main", height: "75px"}}>
            <Stack width={"100%"} flexDirection={"row"} justifyContent={"space-between"}>
                <Box sx={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <IconButton sx={{color: "primary.light"}}>
                        <MenuIcon color="primary.light"/>
                    </IconButton>
                    <InputBase 
                    placeholder="Search here..."
                    sx={{ 
                        backgroundColor: "rgba(255,255,255,0.12)",
                        color: "primary.light",
                        padding: "1rem", 
                        borderRadius: "100vmax", height: "2.5rem" }} 
                        startAdornment={<SearchIcon sx={{color: "primary.light"}} />}/>
                </Box>
                <Box>
                    <Avatar sx={{backgroundColor: "blueAccent"}}>DC</Avatar>
                </Box>
            </Stack>
        </Toolbar>
    </AppBar> );
}

export default Navbar;