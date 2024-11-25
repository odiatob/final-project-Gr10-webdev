import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>DLSL Enrollment System</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.button}>Home</Link>
        <Link to="/students" style={styles.button}>List of Students</Link>
        <Link to="/about" style={styles.button}>Login</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(135deg, #4CAF50, #388E3C)', // Gradient background
    color: 'white',
    padding: '15px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  title: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '28px',  // Reduced size for a simpler header
    fontWeight: '600',
    margin: '0',
  },
  nav: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  button: {
    textDecoration: 'none',
    fontSize: '16px',
    color: 'white',
    padding: '8px 16px',
    backgroundColor: '#388E3C',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#4CAF50', // Lighter green on hover
  },
};

export default Header;
