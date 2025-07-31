import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Dashboard from './pages/dashboard.jsx'
import AddProduct from './pages/AddProduct.jsx'
import './App.css'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path ="/" element={<Login />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/register" element={<Signup />} />
        <Route path ="/dashboard" element={<Dashboard />} />
        <Route path ="/addProduct" element={<AddProduct />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
