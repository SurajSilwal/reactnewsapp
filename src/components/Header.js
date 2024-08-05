import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>News Website</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/personas">Personas & User Stories</Link>
    </nav>
  </header>
);

export default Header;
