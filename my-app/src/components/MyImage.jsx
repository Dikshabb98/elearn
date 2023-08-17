
import React from 'react'
import './MyImage.css'
import MyImage from '../images/p6.png'
import Animation from './Animation'
function App()  {
  return (
    
      <>
      <div id="img">
      <img src={MyImage} alt="MyImage" />
     
     
    </div>
    
       <Animation/>
     
     </>
  )
}

export default App