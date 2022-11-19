import React from "react";
import {AppBar, Toolbar, Typography,Stack,Button} from "@mui/material";


const Header = () =>{
    return(
        <AppBar position='static' style={{ background: '#73B87A' }}>
            <Toolbar>
                <Typography variant='h4' component = 'div' sx={{flexGrow:1, height: '100px',display: 'flex', alignItems: 'center', fontSize: "40px"}}>
                    Vert
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Button color='inherit'>Location</Button>
                    <Button color='inherit'>View</Button>
                    <Button color='inherit'>Post</Button>
                    <Button color='inherit'>Login</Button>
                    <Button color='inherit'>Signup</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;