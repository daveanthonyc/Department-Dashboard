import { AppBar, Avatar, Stack, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Divider, Button, Tooltip } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { openMenu } from "../state/global";
import { useDispatch } from "react-redux";
import { Image } from "@mui/icons-material";

function Navbar() {
    // TEMPORARY DATA
    const name = "David Chiang";
    const role = "Lead Developer";

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const dispatch = useDispatch();

    return ( 
        <AppBar sx={{backgroundColor: "purpleAccent", paddingBlock: "2px"}} position="static">
            <Toolbar>
                <Stack flexDirection="row" justifyContent="space-between" sx={{width: "100%"}}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <img src="../src/assets/logo.png" alt="" style={{ height: "40px" }} />
                        <Typography variant="h5" component="h1" color={"primary"} sx={{fontWeight: "500"}}>Special Department</Typography>
                    </Box>
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Tooltip title="Profile" arrow >
                            <Avatar
                                sx={{ cursor: "pointer", height: "40px", aspectRatio: 1}}
                                onClick={handleClick}
                                id="profile-button"
                                aria-controls={open ? 'profile-menu' : undefined}
                                aria-haspopup='true'
                                aria-expanded={open ? 'true' : undefined}
                                src="../src/assets/dp.jpg"
                            >DC</Avatar>
                        </Tooltip>

                        <Tooltip title="Toggle Menu" arrow>
                            <IconButton
                                sx={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", aspectRatio: 1, height: "40px"}}
                                id="menu"
                                onClick={() => dispatch(openMenu())}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>

                        <Menu id='profile-menu'
                            PaperProps={{
                                style: {
                                    borderRadius: '10px',
                                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                                }
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            MenuListProps={{
                                'aria-labelledby': 'resources-button',
                            }}
                            onClose={handleClose}>
                            <Stack divider={<Divider orientation="horizontal" flexItem />}>
                                <Box sx={{ display: "flex", padding: "15px", gap: "10px", width: "200px" }}>
                                    <Avatar>DC</Avatar>
                                    <Box>
                                        <Typography sx={{ fontWeight: "bold" }} color="primary.medium">{name}</Typography>
                                        <Typography color="primary.light">{role}</Typography>
                                    </Box>
                                </Box>
                                <MenuItem>
                                    <Button variant="text" sx={{ color: "primary.medium" }} startIcon={<AccountBoxIcon />}>Profile</Button>
                                </MenuItem>
                                <Button variant="text" sx={{color: "purpleAccent"}} startIcon={<LockIcon />}>Sign Out</Button>
                            </Stack>
                        </Menu>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
     );
}

export default Navbar;