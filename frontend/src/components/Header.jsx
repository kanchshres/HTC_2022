import React from "react";
import {Link} from "react-router-dom"
import {AppBar, Toolbar, Typography,Stack,Button} from "@mui/material";

const Header = () =>{
    return(
        <AppBar position='static' style={{ background: '#73B87A', marginBottom: 20}}>
            <Toolbar>
                <Typography variant='h4' component = 'div' sx={{flexGrow:1, height: '100px',display: 'flex', alignItems: 'center', fontSize: "40px"}}>
                    Vert
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Link to = "/" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Home</Button>
                    </Link>
                    <Link to = "/location" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Location</Button>
                    </Link>
                    <Link to ="/view" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>View</Button>
                    </Link>
                    <Link to = "/post" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Post</Button>
                    </Link>
                    <Link to ="/login" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px' }} color='inherit'>Get Started</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;