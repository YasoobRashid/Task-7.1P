import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
import bcrypt from 'bcryptjs'; 
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const storedUser = userDoc.data();
        

        const passwordMatch = bcrypt.compareSync(password, storedUser.password);
        
        if (passwordMatch) {
          console.log('Logged in successfully');
          navigate('/');
        } else {
          console.log('Incorrect password');
          alert('Incorrect password!');
        }
      } else {
        console.log('No user found');
      }
    } catch (error) {
      console.error('Error logging in', error);
      alert(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <form onSubmit={handleLogin} className="login-form">
        <div className="header">
          <h2>Login</h2>
          <span 
            className="sign-up" 
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </div>
        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
