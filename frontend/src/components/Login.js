import React, { useState, useEffect} from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (location.state) {
      if (location.state.email) {
        setEmail(location.state.email);
      }
      if (location.state.password) {
        setPassword(location.state.password);
      }
    }
  }, [location.state])
  
  
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const redirectToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-color">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold text-center text-white mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input  type={showPassword ? 'text' : 'password'} className="w-full p-2 mb-4 rounded"placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className='flex items-center mb-4'>
      <input type='checkbox' checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
      <label className="text-white ml-2">Show password</label>
      </div>

      <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
      <h3 className="text-center text-white mt-4">If you don't have an account, click this button</h3>
      <button onClick={redirectToRegister} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2">Here</button>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>   
    </div>
  );
};

export default Login;