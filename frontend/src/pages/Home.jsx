import React from 'react';
import HeroSection from './video';
import "./Home.css";
import video2 from '../assets/video2.mp4';

const HomePage = () => {
  return (
    <VideoSection />
  )
}

function VideoSection(){
  return (
    <div className='video-container'>
        <video src={video2} autoPlay loop muted style={{width: '100%',height: '100vh'}} />
        <h1>FairTrade</h1>
        <p>from one hand to another</p>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default HomePage;
