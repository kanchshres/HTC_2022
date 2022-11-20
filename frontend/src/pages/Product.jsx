import React from 'react'
import blazer from "../assets/blazer.png";
import './cards.css';

const Product = () => {
  return (
  <div className='cards blue lighten-3'>
      <h1>
        Current Products on Hold
      </h1>
        <div className="cards__container">
          <div class="row">
            <div class="col m6">
              <div class="card">
                <div class="card-image">
                  <img src={blazer}/>
                  <span class="card-title">Blazer</span>
                </div>
                <div class="card-content">
                  <p>A blazer, medium sized </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Product;