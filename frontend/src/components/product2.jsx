import React from 'react'
import blouse from "../assets/blouse.png";
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material';
import {Link} from "react-router-dom";




const product2 = () => {
  return (
    <Box width='15%' style={{paddingLeft: 20, paddingBottom: 30}}>
      <Card>
      <CardMedia
        component='img'
        height='200px'
        image = {blouse}

      />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Vintage Coat
          </Typography>
          <Typography variant='body2' color='text.secondary'>

            Posted 2022/11/19

            | 

            Retail Price $30
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>View More</Button>

          <Link to ="/report" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Button size="small">Report </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>




  )
      
}

export default product2;