import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import './App.css'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path ="/" element={<Login />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/register" element={<Signup />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
