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
 import polo from "../assets/polo.png";
 import shirt from "../assets/shirt.png";
 import shoe from "../assets/shoe.png";
 import short from "../assets/short.png";
 import under from "../assets/under_shirt.png";




 



const View = () => {
  return (
    <div style={{marginTop: 120}}>
        <div className='show'>
            
            <Product
              picture = {blazer}
              name = "Vintage Coat"
              price = "30"
            />

            <Product
              picture = {cap}
              name = "Used Cap"
              price = "20"
            />

            <Product
              picture = {blouse}
              name = "Worn Top"
              price = "34"
            />

            <Product
              picture = {dress}
              name = "Unused Dress"
              price = "90"
            />

            <Product
              picture = {long_sleeve}
              name = "Long Sleeve"
              price = "80"
            />

            
   
        </div>

        <div className='show'>

        <Product
              picture = {polo}
              name = "Polo Shirt"
              price = "20"
          />
          <Product
              picture = {shirt}
              name = "Unused Shirt"
              price = "40"

              
          />
          <Product
              picture = {shoe}
              name = "Brown Boots"
              price = "70"
          />
          <Product
              picture = {short}
              name = "New Shorts"   
              price = "40"
          />
          <Product
              picture = {under}
              name = "Under Shirt"   
              price = "10"

              
          />
            

        </div>



    </div>
    
        
  )
      
}

export default View;