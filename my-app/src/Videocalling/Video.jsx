import React from 'react';
import './Video.css'
const Video = () => {
  return (
    <div className='video_content'>
      <video width="900" height="550" controls>
        <source src="https://youtu.be/91Vdve_SlTE" />
        
      </video>
    </div>
  );
};

export default Video;
