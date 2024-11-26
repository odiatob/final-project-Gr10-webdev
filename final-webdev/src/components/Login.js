import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Predefined admin credentials
  const adminAccounts = [
    { email: 'admin1@dlsl.edu.ph', password: 'admin123' },
    { email: 'admin2@dlsl.edu.ph', password: 'admin456' },
    { email: 'admin3@dlsl.edu.ph', password: 'admin789' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the user is an admin
    const isAdmin = adminAccounts.some(
      (admin) => admin.email === email && admin.password === password
    );

    if (isAdmin) {
      alert('Welcome, Admin!');
      navigate('/admin'); // Redirect to Admin page
    } else if (email.endsWith('@dlsl.edu.ph')) {
      alert('Login successful. Redirecting to Enrollment Form.');
      navigate('/enroll'); // Redirect to Enrollment Form for students
    } else {
      alert('Invalid credentials or unauthorized access.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>DLSL Student Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter your DLSL email"
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
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '50px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
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
  },
};

export default Login;
