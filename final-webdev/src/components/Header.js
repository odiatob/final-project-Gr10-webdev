import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ parentEmail, setParentEmail }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setParentEmail(null); // Clear the parent's email on logout
    navigate('/'); // Redirect immediately to the home page
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>DLSL Enrollment System</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.button}>Home</Link>
        <Link to="/students" style={styles.button}>List of Students</Link>
        <Link to="/login" style={styles.button}>Login</Link>
        {parentEmail && (
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        )}
      </nav>
      {parentEmail && (
        <div style={styles.parentEmail}>Parent: {parentEmail}</div>
      )}
    </header>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(135deg, #4CAF50, #388E3C)',
    color: 'white',
    padding: '15px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  title: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '28px',
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
    cursor: 'pointer',
  },
  parentEmail: {
    marginTop: '10px',
    fontSize: '18px',
    color: '#fff',
    fontWeight: '500',
  },
};

export default Header;