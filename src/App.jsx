import React from 'react'
import Navbar from "./Component/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './Containers/Home/Home'
import About from './Containers/About/About'
import Resume from './Containers/Resume/Resume'
import Skills from './Containers/Skills/Skills'
import Portfulio from './Containers/Portfulio/Portfulio'
import Contact from './Containers/Contact/Contact'
import "./App.css"
import Services from './Containers/Service/Services'
const App = () => {
  
  return (
    <div className='App'>
      {/* navbar */}
      <Navbar/>

      {/* MainPage Content */}
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfulio' element={<Portfulio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> 
    </div>
  )
}

export default App
