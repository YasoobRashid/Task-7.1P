import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Yasoobdev@Deakin</h1>
        <input type="text" placeholder="Search" />
        <div className="button-container">
          <button className="button" onClick={() => navigate('/post')}>Post</button>
          <button className="button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </header>

      
      <main className="main-content">
        <h2>Welcome to Yasoobdev@Deakin</h2>
      </main>
    </div>
  );
};

export default Home;
