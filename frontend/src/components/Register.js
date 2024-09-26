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
    <div>
      <h2>Register Here</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
