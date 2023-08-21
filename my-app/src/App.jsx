import './App.css'
import React from 'react'
import { BrowserRouter,Routes,  Route} from "react-router-dom"
import Navbar from './components/Navbar'
// import MyImage from './components/MyImage'
import Home from './components/Home'
import Course from './components/Course'
import Roadmaps from './components/Roadmaps'
import About from './components/About'
import Login from './components/Login'


function App()  {
  return (
    <div>
     
      <BrowserRouter>
<Navbar/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/course" element={<Course />} />
  <Route path="/roadmaps" element={<Roadmaps />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
</Routes>


</BrowserRouter>
      {/* <MyImage/> */}
      
      </div>
   
     
   
  )
}

export default App
