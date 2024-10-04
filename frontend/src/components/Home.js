import React, { useEffect, useState } from 'react';
import { fetchItems } from '../addClothes';
import { auth } from '../firebase'; 
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 
import './index.css';
import './Header'
import Header from './Header';

const Home = () => {
  const [isCartActive, setIsCartActive] = useState(false)
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
    try {
      if (currentUser?.email) {
        localStorage.setItem('currentUserEmail', currentUser.email);
      }
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.log('sign out error', error.message);
    }
  };

const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log('added to cart')
    alert(`${item.brand} added to cart`)
    setIsCartActive(true)
  }

  const navigateToDetail = (id) => {
    navigate(`/clothes/${id}`);  
  }

console.log(items)
  return (
    <div className="bg-custom-color text-white p-8 min-h-screen">
     <Header  
     currentUser={currentUser} 
     navigate={navigate}
     handleSignOut={handleSignOut}
     
     />

      <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <p className="mt-2">Items For Sale:</p>
        <div className="flex flex-wrap justify-center">
          {items.map(item => (
            <div key={item.id} className="w-1/3 p-2">
              <div className=" p-4 rounded-lg text-center" >
                <h3 onClick={() => navigateToDetail(item.id)}  className="text-lg font-semibold">{item.brand}</h3>
                <img src={item.url} className="w-32 h-auto mx-auto rounded" />
                <p className="mt-2">Price: ${item.price}</p>
                <button onClick={() => addToCart(item)}className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-500 mt-2">add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
