import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <h1>HOME</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/about">To about</Link>
    </div>
  );
}

export default Home;
