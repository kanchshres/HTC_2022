import React from "react";
import {Link} from "react-router-dom"
import {AppBar, Toolbar, Typography,Stack,Button} from "@mui/material";

const Header = () =>{
    return(
        <AppBar position='fixed' style={{ background: '#73B87A', marginBottom: 0}}>
            <Toolbar>
                <Typography variant='h4' component = 'div' sx={{flexGrow:1, height: '100px',display: 'flex', alignItems: 'center', fontSize: "40px",fontFamily: 'GFS Didot'}}>
                    FairTrade
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Link to = "/" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px' ,fontFamily: 'GFS Didot'}} color='inherit'>Home</Button>
                    </Link>
                    <Link to = "/location" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px',fontFamily: 'GFS Didot' }} color='inherit'>Location</Button>
                    </Link>
                    <Link to ="/view" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px',fontFamily: 'GFS Didot' }} color='inherit'>View</Button>
                    </Link>
                    <Link to = "/post" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px',fontFamily: 'GFS Didot' }} color='inherit'>Post</Button>
                    </Link>
                    <Link to ="/login" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '18px',fontFamily: 'GFS Didot' }} color='inherit'>Get Started</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;