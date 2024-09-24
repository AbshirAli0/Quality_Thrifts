// Home.js
import React, { useEffect, useState } from 'react';
import { fetchItems } from '../addClothes';
import { useAuth } from '../context/AuthContext';
import './index.css';

const Home = () => {
  const [items, setItems] = useState([]);
  const { currentUser } = useAuth(); 

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

  return (
    <div>
      <h1>signed in as: {currentUser?.email}</h1>
      <h2>Quality Thrifts</h2>
      <p>Items For Sale: </p>
      <ul>
        {items.map(item => (
          <li key={item.id}>

            <h3>{item.brand}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
