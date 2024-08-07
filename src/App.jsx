

import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Page3rd from './pages/HomePage/Page3rd'
import NavBar from './pages/NavBar'

import Secondpage from './pages/Secondpage'

function App() {


  return (
    <>
      <NavBar />
      <HomePage />
      <Secondpage />
      <Page3rd />
      
    </>




  )
}

export default App
