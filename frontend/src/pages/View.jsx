import React from 'react'
import Product from '../components/Product'
import "./View.css"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
 import GridLayout from "react-grid-layout";
const View = () => {
  return (
    <div>
        <div className='show'>
            
            <Product/>
            
            <Product/>

            <Product/>

            <Product/>

            <Product/>

            <Product/>


        </div>

        <div className='show'>

            <Product/>
            
            <Product/>

            <Product/>

            <Product/>

            <Product/>

            <Product/>


        </div>



    </div>
    
        
  )
      
}

export default View;