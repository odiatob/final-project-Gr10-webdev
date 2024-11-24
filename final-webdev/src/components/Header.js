import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>DLSL Enrollment System</h1>
      <nav style={styles.nav}>
        <button style={styles.button} onClick={() => alert('Home clicked')}>Home</button>
        <button style={styles.button} onClick={() => alert('List of Students clicked')}>List of Students</button>
        <button style={styles.button} onClick={() => alert('About Us clicked')}>About Us</button>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  title: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    backgroundColor: '#fff',
    color: '#4CAF50',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Header;
