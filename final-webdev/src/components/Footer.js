import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 All Rights Reserved. Created by Group 8</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    padding: '10px 0',
    borderTop: '1px solid #ddd',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  text: {
    fontSize: '14px',
    color: '#333',
    margin: 0,
  },
};

export default Footer;
