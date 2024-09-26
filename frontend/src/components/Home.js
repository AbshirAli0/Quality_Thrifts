import React, { useEffect, useState } from 'react';
import { fetchItems } from '../addClothes';
import { auth } from '../firebase'; // Import the Firebase auth instance
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth'; // Import the signOut function
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './index.css';

const Home = () => {
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
        <a href="#home" className="nav-link text-white hover:text-gray-400 text-xl">Home</a>
        <a href="cart" className="nav-link text-white hover:text-gray-400 text-xl">Cart</a>
        <a href="#contact" className="nav-link text-white hover:text-gray-400 text-xl">About</a>
        <a onClick = {handleSignOut} className="nav-link text-white hover:text-gray-400 text-xl">Sign Out</a>
        
      </nav>

      <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <p className="mt-2">Items For Sale:</p>
        <div className="flex flex-wrap justify-center">
          {items.map(item => (
            <div key={item.id} className="w-1/3 p-2">
              <div className=" p-4 rounded-lg text-center" >
                <h3 className="text-lg font-semibold">{item.brand}</h3>
                <p className="mt-2">Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
