import React, { useEffect, useState } from 'react';
import { fetchItems } from '../addClothes';
import { auth } from '../firebase'; 
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 
import './index.css';
import Header from './Header';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { currentUser } = useAuth();
    const navigate = useNavigate()

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || [])
    setCartItems(cart)
  }, [])
  const handleSignOut = async () => {
    try{
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.log('Sign out errer', error.message)
    }
  }

  const removeFromCart = (removedItem) => {
    const updatedCart = cartItems.filter(item => item.id !== removedItem.id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCartItems(updatedCart)
    alert(`${removedItem.brand} removed from cart`)
  }
  
    return (
        <div className="bg-custom-color text-white p-8 min-h-screen">
       
       <Header  
     currentUser={currentUser} 
     navigate={navigate}
     handleSignOut={handleSignOut}
     
     />
        <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <h1 className="text-3xl mt-4 text-left">Your Cart:</h1>
        <div className="mt-6">
          {cartItems.length > 0 ? (
            <div className="flex flex-wrap justify-center">
              {cartItems.map((item, index) => (
                <div key={index} className="w-1/3 p-2">
                  <div className="p-4 rounded-lg text-center">
                  <img src={item.url} className="w-32 h-auto mx-auto rounded" />
                    <h3 className="text-lg font-semibold">{item.brand}</h3>
                    <p className="mt-2">Price: ${item.price}</p>
                    <p>size:  {item.size}</p>
                    <button onClick={() => removeFromCart(item)} className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-500 mt-2">Remove From Cart</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-4">Your cart is empty </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;