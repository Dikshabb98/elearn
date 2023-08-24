import React from 'react';
import Frontend from './Frontend';
import './Roadmaps.css'
const file = 'https://drive.google.com/drive/folders/12E-T2XitFrQZM6NiKPbo6KiER2CgS3wO';
const fil2 = 'https://drive.google.com/drive/folders/12E-T2XitFrQZM6NiKPbo6KiER2CgS3wO';
const fil3 = 'https://drive.google.com/drive/folders/12E-T2XitFrQZM6NiKPbo6KiER2CgS3wO';
const fil4 = 'https://drive.google.com/drive/folders/12E-T2XitFrQZM6NiKPbo6KiER2CgS3wO';

const Roadmaps = () => {
  const handleDownload = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div className='roadmap'id='roadmaphai'>
      <Frontend title="Frontend Devloper" />
      <button className=" Rodadmap_btn" onClick={() => { handleDownload(file) }}>Show</button>

      <Frontend title="Backend Devloper" />
      <button className=" Rodadmap_btn" onClick={() => { handleDownload(fil2) }}>Show</button>

      <Frontend title="UI/UX Devloper" />
      <button className=" Rodadmap_btn" onClick={() => { handleDownload(fil3) }}>Show</button>

      <Frontend title="Data structure" />
      <button className=" Rodadmap_btn" onClick={() => { handleDownload(fil4) }}>Show</button>

      <Frontend title="Android Devloper" />
      <button  className=" Rodadmap_btn" onClick={() => { handleDownload(file) }}>Show</button>
    </div>
  );
};

export default Roadmaps;