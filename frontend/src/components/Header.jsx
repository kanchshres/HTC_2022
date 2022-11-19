import React from "react";
import {Link} from "react-router-dom"
import {AppBar, Toolbar, Typography,Stack,Button} from "@mui/material";

const Header = () =>{
    return(
        <AppBar position='static' style={{ background: '#73B87A' }}>
            <Toolbar>
                <Typography variant='h4' component = 'div' sx={{flexGrow:1, height: '100px',display: 'flex', alignItems: 'center', fontSize: "40px"}}>
                    Vert
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Link to = "/" style={{ color: '#FFF' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Home</Button>
                    </Link>
                    <Link to = "/location" style={{ color: '#FFF' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Location</Button>
                    </Link>
                    <Link to ="/view" style={{ color: '#FFF' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>View</Button>
                    </Link>
                    <Link to = "/post" style={{ color: '#FFF' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Post</Button>
                    </Link>
                    <Link to ="/login" style={{ color: '#FFF' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Login</Button>
                    </Link>
                    <Link to ="/signup" style={{ color: '#FFF' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Signup</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;