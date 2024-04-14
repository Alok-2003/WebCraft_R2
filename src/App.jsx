import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home'
import PLogin from './pages/PLogin';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/login/phone' element={<PLogin />}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App
