import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate, useLocation } from "react-router-dom";
import './index.css';

const Landing = () => {
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate("/register");
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

useEffect(() => {
  const title = document.querySelector('.fade-in-title')
  const buttons = document.querySelectorAll('.fade-in-button')

  setTimeout(() => {
    title.classList.add('fade-in')
  }, 300)

  setTimeout(() => {
    buttons.forEach(button => button.classList.add('fade-in'))
  },800)

}, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl mb-12 font-title text-red-600 fade-in-title" >⚽️ SportsCore/ ⚽️</h1>

      <div className="flex flex-row space-x-20 mt-12 w-2/5">
        <button
          onClick={redirectToLogin}
          className="text-3xl w-full buttons border-2 border-black text-red-600 p-2 rounded hover:bg-black fade-in-button"
        >
          Login
        </button>
        <button
          onClick={redirectToRegister}
          className="text-3xl w-full buttons border-2 border-black text-red-600 p-2 rounded hover:bg-black fade-in-button"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Landing;
