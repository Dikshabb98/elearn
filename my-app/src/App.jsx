import './App.css'
import React from 'react'
import { BrowserRouter,Routes,  Route} from "react-router-dom"
import Navbar from './components/Navbar'
import MyImage from './components/MyImage'
import Home from './components/Home'
import Course from './components/Course'
import Roadmaps from './components/Roadmaps'
import About from './components/About'
import Login from './components/Login'
function App()  {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
<Navbar/>
<Routes>
   <Route  path="/" element={<Home></Home>}/>
   <Route  path="/Course" element={<Course></Course>}/>
   <Route  path="/Roadmaps" element={<Roadmaps></Roadmaps>}/>
   <Route  path="/About" element={<About></About>}/>
   <Route  path="/Login" element={<Login></Login>}/>
</Routes>
</BrowserRouter>
      <MyImage/>
      
      </div>
   
     
   
  )
}

export default App
