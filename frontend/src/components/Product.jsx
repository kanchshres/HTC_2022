import React from 'react'
import blazer from "../assets/blazer.png";
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material';




const Product = () => {
  return (
    <Box width='15%' style={{paddingLeft: 20, paddingBottom: 30}}>
      <Card>
      <CardMedia
        component='img'
        height='200px'
        image = {blazer}

      />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Vintage Coat
          </Typography>
          <Typography variant='body2' color='text.secondary'>

            Posted 2022/11/19
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>View More</Button>
          <Button size='small'></Button>
        </CardActions>
      </Card>
    </Box>




  )
      
}

export default Product;