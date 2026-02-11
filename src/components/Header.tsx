import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="nav-brand">
          <h1>Quiz App</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;