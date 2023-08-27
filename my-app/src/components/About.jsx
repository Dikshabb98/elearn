import React from 'react';
import './About.css';
import Bg from "../images/pic5.jpg";

const About = () => {
  return (
    <>
    <div className='contan'>
    <div className='abut'>
      <h2 className='h2_style'>
        About Us
      </h2>
      <p className='p_styl'>I am Myname. This is my react project in which 
       React is very passionabke language which 
        I like top most in all other languages. 
        heeeeeeeeeeeeeeeeeeheeeeeehehe 
        beeeeeeeenrnfmnf brrrrrrrrr 
        beeeeeeeeeeeeebeeeeeeeee 
        heeeeeeeeeehe </p>
        
        </div>
        <div className='imgi_stl'>
        <img  src={Bg} alt="" srcset="" />
        </div>
    </div>
    
    </>
  );
}

export default About;
