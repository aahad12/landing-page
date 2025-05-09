// Loader.js
import React from 'react';
import video from "../assets/img/video.mp4"

const Loader = () => {
  return (
    // <div className="loader">
    //   <img src="https://media.giphy.com/media/xT0Gqtv2EwXFcUGcaA/giphy.gif" alt="Loading..." />
    // </div>
    <div className="loader">
    <video 
      src={video} 
      alt="Loading..." 
      autoPlay 
      loop 
      muted 
      style={{ width: '20%', height: 'auto' }} 
    />
  </div>
  );
}

export default Loader;
