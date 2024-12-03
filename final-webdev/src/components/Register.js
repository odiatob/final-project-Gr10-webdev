import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Check if email and password are valid
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // Assuming registration is successful
    alert('Registration successful! You can now log in.');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register as a Lasallian</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px',
    maxWidth: '500px',
    margin: '50px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#4CAF50',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: '500',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '5px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Register;
