import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      localStorage.setItem("registeredEmail", email);
      localStorage.setItem("registeredPassword", password);

      navigate("/login");
      console.log("Registration successful");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const registerCard = document.querySelector(".fade-in-register");
    if (registerCard) {
      setTimeout(() => {
        registerCard.classList.add("fade-in");
      }, 0);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white fade-in-register">
      <h2 className="text-6xl font-bold text-center text-red-600 mb-4 ">
        Register Here!
      </h2>
      <div className="p-8  w-96">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded text-black border-black border-4 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 mb-4 rounded text-black border-black border-4 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
          </span>
        </div>
        <button
          onClick={handleRegister}
          className="w-full bg-red-700 text-white p-2 rounded hover:bg-red-600 text-black mt-2"
        >
          Register
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
export default Register;
