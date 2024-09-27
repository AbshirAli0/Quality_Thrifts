import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login')
      console.log('Registration successful');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-color">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold text-center text-white mb-4">Register Here</h2>
      <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}  className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2">Register</button>
      {error && <p>{error}</p>}

      </div>     
    </div>
  );
};
{/* <div className="flex items-center justify-center min-h-screen bg-custom-color">
<div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
<h2 className="text-2xl font-bold text-center text-white mb-4">Login</h2>
<input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
<input type="password" className="w-full p-2 mb-4 rounded"placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
<h3 className="text-center text-white mt-4">If you don't have an account, click this button</h3>
<button onClick={redirectToRegister} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2">Here</button>
{error && <p className="text-red-500 text-center mt-2">{error}</p>}
</div>   
</div> */}
export default Register;
