import { Box, Typography, Avatar, Card, Stack, Divider, Menu, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OverviewChart from "../../components/OverviewChart";
import RadialProgressBar from "../../components/RadialProgressBar";
import { averageAttendance } from "../../components/chartData";
import { useGetDataQuery } from "../../state/api";

function Dashboard() {
    const { data } = useGetDataQuery();
    console.log(data)
    const date = new Date()
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }


    // TEMPORARY DATA
    const name = "David Chiang"

    return (
        <Box>
            {/* ROW ONE */}
            <Box sx={{ height: "100%", width: "100%", gap: "1rem", alignItems: "center" }} p="2rem" display={"flex"}>
                <Avatar variant="square" sx={{ borderRadius: "10px", width: "65px", height: "65px" }}
                    src="../src/assets/dp.jpg"
                >DC</Avatar>
                <Box gap={0.5} display={"grid"}>
                    <Typography variant="h4" color="primary.dark" sx={{ fontWeight: "bold" }}>Welcome, {name}!</Typography>
                    <Typography variant="body1" color="primary.light" display={"inline"}>These are your analytics stats for today, <strong>
                        {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</strong>
                    </Typography>
                </Box>
            </Box>

            {/* ROW TWO */}
            <Box paddingInline={"2rem"} display="flex" gap={"2rem"} position={"relative"}>
                <Card sx={{ backgroundColor: "white", width: "100%", height: "400px", borderRadius: "10px", flex: "1" }}>
                    <Stack sx={{ width: "100%", height: "100%" }} divider={<Divider />} >
                        <Box paddingBlock="15px" color="primary.dark" paddingInline="15px">
                            <Typography variant="h6" component="h2">Average Attendance ({monthNames[date.getMonth()]})</Typography>
                        </Box>
                        <Box sx={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography sx={{ position: "absolute", bottom: "10.5rem" }} variant="h3" component="span" color="primary.dark">{averageAttendance}</Typography>
                            <RadialProgressBar></RadialProgressBar>
                        </Box>
                    </Stack>
                </Card>

                <Card sx={{ backgroundColor: "white", width: "100%", height: "400px", borderRadius: "10px", flex: "2" }}>
                    <Stack sx={{ width: "100%", height: "100%" }} divider={<Divider />} >
                        <Box paddingBlock="15px" color="primary.dark" paddingInline="15px" display={"flex"} justifyContent={"space-between"}>
                            <Typography variant="h6" component="h2">Department Attendance Overview</Typography>
                            <Button variant="outlined" sx={{ color: "purpleAccent", border: "1px solid #5569ff" }} onClick={() => handleClick} endIcon={<KeyboardArrowDownIcon />}>ALL TIME</Button>
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
                                        </Box>
                                    </Box>
                                </Stack>
                            </Menu>
                        </Box>
                        <Box padding={'1rem'}>
                            <Button variant="outlined" sx={{ color: "purpleAccent", border: "1px solid #5569ff" }} onClick={() => handleClick} endIcon={<KeyboardArrowDownIcon />}>Special Department</Button>
                        </Box>
                        <Box sx={{ height: "100%", width: "100%" }}>
                            <OverviewChart></OverviewChart>
                        </Box>
                    </Stack>
                </Card>
            </Box>
        </Box>
    );
}

export default Dashboard;