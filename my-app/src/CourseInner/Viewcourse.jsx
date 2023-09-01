import React from 'react'
import Sidebar from '../components/Sidebar'
import Video from '../Videocalling/Video'
import './Viewcourse.css'
const Viewcourse = () => {
  return (
    <>
    <div className='view_course'>
      <Sidebar/>
          <div className='scroll'>
          <button type="button">Back to Course</button>
          <Video/>
        </div>
        </div>
       
    </>
  )
}

export default Viewcourse