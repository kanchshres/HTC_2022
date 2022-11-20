import React from "react";
import {Link} from "react-router-dom"
import {AppBar, Toolbar, Typography,Stack,Button} from "@mui/material";

const Header = () =>{
    return(
        <AppBar position='fixed' style={{ background: '#73B87A', marginBottom: 0, "background-image": "linear-gradient(to right, #00395d, #8f8f8c)"}}>
            <Toolbar>
                <Typography variant='h4' component = 'div' sx={{flexGrow:1, height: '100px',display: 'flex', alignItems: 'center', fontSize: "40px",fontFamily: 'GFS Didot'}}>
                    FairTrade
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Link to = "/" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px' ,fontFamily: 'Trebuchet MS'}} color='inherit'>Home</Button>
                    </Link>
                    {/* <Link to ="/about" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px',fontFamily: 'Trebuchet MS'}} color='inherit'>About Us</Button>
                    </Link> */}
                    <Link to = "/location" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px',fontFamily: 'Trebuchet MS' }} color='inherit' onClick="history.go(0)" >Location</Button>
                    </Link>
                    <Link to ="/view" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px',fontFamily: 'Trebuchet MS' }} color='inherit'>View</Button>
                    </Link>
                    <Link to = "/post" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px',fontFamily: 'Trebuchet MS'}} color='inherit'>Post</Button>
                    </Link>
                    <Link to ="/login" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button style={{ fontSize: '20px',fontFamily: 'Trebuchet MS'}} color='inherit'>Get Started</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;