import React from 'react'
import Product from '../components/Product'
import "./View.css"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
 import GridLayout from "react-grid-layout";
 import product2 from '../components/product2'
 import blazer from "../assets/blazer.png";



const View = () => {
  return (
    <div style={{marginTop: 120}}>
        <div className='show'>
            
            <Product
              picture = {blazer}
            />
            

            


        </div>

        <div className='show'>

            

        </div>



    </div>
    
        
  )
      
}

export default View;