import React from 'react'
import Product from '../components/Product'
import axios from "axios";

import "./View.css"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
 import GridLayout from "react-grid-layout";
 import product2 from '../components/product2'
 import blazer from "../assets/blazer.png";
 import blouse from "../assets/blouse.png";
 import cap from "../assets/cap.png";
 import dress from "../assets/hoodie.png"
 import long_sleeve from "../assets/long_sleeve.png";
 import outerwear from "../assets/outerwear.png";


 



const View = () => {
  return (
    <div style={{marginTop: 120}}>
        <div className='show'>
            
            <Product
              picture = {blazer}
            />

<Product
              picture = {cap}
            />



            <Product
              picture = {blouse}
            />
            

            


        </div>

        <div className='show'>

            

        </div>



    </div>
    
        
  )
      
}

export default View;