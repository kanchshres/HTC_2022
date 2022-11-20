import React from 'react';
import "./Home.css";
import trees from '../assets/trees.mp4';
import card1 from '../components/card1';

const HomePage = () => {
  return (

    <VideoSection />
 

  )
}

function VideoSection(){
  return (
    <div className='video-container'>
        <video src={trees} autoPlay loop muted style={{width: '100%',height: '100vh'}} />
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;

        <div className='show'>
            
            <card1 />
            
            <card1 />

            <card1 />



        </div>


    </div>
  )
}

export default HomePage;
