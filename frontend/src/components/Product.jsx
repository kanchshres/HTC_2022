import React from 'react'
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material';
import {Link} from "react-router-dom";


const Product = (props) => {
  return (
    <Box width='18%' style={{paddingLeft: 20, paddingBottom: 30}}>
      <Card>
      <CardMedia
        component='img'
        height='200px'
        image = {props.picture}

      />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>

            Posted 2022/11/19

            | 

            Retail Price ${props.price}
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

export default Product;