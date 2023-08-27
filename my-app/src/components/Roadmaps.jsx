import React from 'react';
import Frontend from './Frontend';
import './Roadmaps.css'

const file = 'https://drive.google.com/drive/folders/12E-T2XitFrQZM6NiKPbo6KiER2CgS3wO';
const fil2 = 'https://drive.google.com/drive/folders/12E-T2XitFrQZM6NiKPbo6KiER2CgS3wO';
const fil3 = 'https://drive.google.com/drive/folders/12E-T2XitFrQZM6NiKPbo6KiER2CgS3wO';
const fil4 = 'https://drive.google.com/drive/folders/12E-T2XitFrQZM6NiKPbo6KiER2CgS3wO';

const Roadmaps = () => {


  return (
    <>
    <div className='rd_cont'>
     <div id='textrd'>
      <h1  id='h1_lay'>  Welcome to Roadmaps </h1>
      <p id='p_lay'> bshcgxjhaschjasbcashbvjhsajhsvhjsvjhqsvjhsfvhvfhnhgvftgtftgfgb <br />
      sgbcjhabcnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn <br />
      yghygjygjyg <br />
      </p>
     </div>
    <div className='roadmap'>
    <a href= {file}><Frontend  title="Frontend Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title="Backend  Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title="UI/UX Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title="WEB 3 Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title="Full stack Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title="Android Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title="IOS Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title=" AI/ML" className="andr"  /></a>
    <a href= {file}><Frontend  title="App Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title="Web Developer" className="andr"  /></a>
    <a href= {file}><Frontend  title=" DEV/OOPS" className="andr"  /></a>
    <a href= {file}><Frontend  title="Backend Developer" className="andr"  /></a>
    </div>
    </div>
    </>
  );
};

export default Roadmaps;