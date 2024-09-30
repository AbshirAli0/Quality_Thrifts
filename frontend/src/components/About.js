import React, { useEffect, useState } from 'react';
import { fetchItems } from '../addClothes';
import { auth } from '../firebase'; 
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 
import './index.css';
import Header from './Header';

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
          <Header
          currentUser={currentUser}
          navigate={navigate}
          handleSignOut={handleSignOut}/>
        <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <h1 className="text-3xl mt-4 text-center ">Hello! this is about us</h1>
        </div>
        </div>
    )
}

export default About;