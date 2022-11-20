import React from 'react';
import "./video.css";
// import '../App.css';
import video2 from '../assets/video2.mp4';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video2} autoPlay loop muted style={{width: '100%',height: '100vh'}} />
            <h1>Vert</h1>
            <p>from one hand to another</p>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default HeroSection
