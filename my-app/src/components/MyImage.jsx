
import React from 'react'
import './MyImage.css'
import MyImage from '../images/p6.png'

import Home from './Home'

function App()  {
  return (
    
      <>
      <div id="img">
      <img src={MyImage} alt="MyImage" />
     <h1>hii</h1>
     
    </div>
      
      
       <Home/>
      
     
     </>
  )
}

export default App