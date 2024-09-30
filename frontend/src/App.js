import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Detail from './components/Detail';

const App = () => {
    return (     <div className="bg-custom-color text-white p-8 min-h-screen">

        <Router>
        <Routes>
        <Route path="/clothes" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/about' element={<About /> } />
          <Route path='/cart' element={<Cart /> } />
          <Route path='/clothes/:id' element={<Detail /> } />

        </Routes>
      </Router>      
    </div>
    
    )

}

export default App