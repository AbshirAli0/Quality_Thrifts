import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';

const App = () => {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/about' element={<About /> } />
          <Route path='/cart' element={<Cart /> } />

        </Routes>
      </Router>      
    )
}

export default App