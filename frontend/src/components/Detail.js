import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItems } from '../addClothes';
import { auth } from '../firebase'; 
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
import './index.css';
import Header from './Header';


const Detail = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const getItemDetails = async () => {
      if (currentUser) {
        const dbItems = await fetchItems()
        const selectedItem = dbItems.find(i => i.id === id)
        setItem(selectedItem)
        setLoading(false); 

      } else {
        console.log('User not authenticated')
        setLoading(false)

      }
    }

    getItemDetails()
  }, [currentUser, id])


  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.log('Sign out error', error.message)
    }
  }

  if (loading) {
    return <p className="text-center text-white">Loading item details...</p>; // Show loading message
  }
  if (!item) {
    return <p className="text-center text-white">Item not Available </p>
  }

  return (
    <div className="bg-custom-color text-white p-8 min-h-screen">
       <Header  
     currentUser={currentUser} 
     navigate={navigate}
     handleSignOut={handleSignOut}
     
     />

      <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <h1 className="text-3xl mt-4 text-center">{item.brand}</h1>
        <p className="text-center text-xl mt-2">Price: ${item.price}</p>
        <p className="text-center mt-2">Description: {item.description || 'No description available'}</p>
      </div>
    </div>
  )
}

export default Detail
