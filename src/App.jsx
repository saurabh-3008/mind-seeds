

import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Page3rd from './pages/HomePage/Page3rd'
import NavBar from './pages/NavBar'


function App() {


  return (
    <>
    {/* <Routes> */}
    <NavBar/>
      <HomePage/>
      <Page3rd/>
    {/* </Routes> */}
    </>
     



  )
}

export default App
