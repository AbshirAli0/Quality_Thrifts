import React, { useEffect, useState } from 'react';
import { fetchItems } from '../addClothes';
import { auth } from '../firebase'; 
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 
import './index.css';

const About = () => {
    const [items, setItems] = useState([]);
    const { currentUser } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
      const getItems = async () => {
        if (currentUser) {
          const dbItems = await fetchItems();
          console.log(currentUser);
          setItems(dbItems);
        } else {
          console.log('User not authenticated');
        }
      };
  
      getItems();
    }, [currentUser]);
  
  const handleSignOut = async () => {
    try{
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.log('Sign out errer', error.message)
    }
  }
  
    return (
        <div className="bg-custom-color text-white p-8 min-h-screen">
        <p className="text-2x font-bold text-right">Signed in as: {currentUser?.email}</p>
         <h2 className="text-5xl mt-4 text-center font-bold">Quality Thrifts</h2>

        <nav className="text-center mt-6 ">
        <a onClick={() => navigate('/')} className="nav-link text-white hover:text-gray-400 text-xl">Home</a>
        <a href="cart" className="nav-link text-white hover:text-gray-400 text-xl">Cart</a>
        <a onClick={() => navigate('/about')}className="nav-link text-white hover:text-gray-400 text-xl">About</a>
        <a onClick = {handleSignOut} className="nav-link text-white hover:text-gray-400 text-xl">Sign Out</a> 
        </nav>
        <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <h1 className="text-3xl mt-4 text-center ">Hello! this is about us</h1>
        </div>
        </div>
    )
}

export default About;