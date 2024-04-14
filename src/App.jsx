import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home'
import PLogin from './pages/PLogin';
import AdminCreate from './pages/AdminCreate';

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/login/phone' element={<PLogin />}></Route>
          <Route path='/admin_create' element={<AdminCreate />}></Route>
        </Routes>
    </>
  )
}
export default App
