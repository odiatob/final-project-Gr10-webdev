import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Track the selected role (Student or Parent)
  const [error, setError] = useState('');
  const navigate = useNavigate(); // React Router hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password || !role) {
      setError('Please fill in all fields and select a role');
      return;
    }

    // Validation for Student emails
    if (role === 'Student') {
      const studentRegex = /^[a-z0-9._%+-]+@dlsl\.edu\.ph$/;
      if (!studentRegex.test(username)) {
        setError('Invalid email format for Student. Use a valid @dlsl.edu.ph email in lowercase.');
        return;
      }
    }

    // Validation for Parent emails
    if (role === 'Parent') {
      const parentRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // General email validation
      if (!parentRegex.test(username)) {
        setError('Invalid email format for Parent. Use a valid email address.');
        return;
      }
    }

    // Simulate authentication (for demo purposes)
    if (username === 'user' && password === 'password123') {
      // Redirect to different pages based on the role (this can be expanded based on your routing logic)
      if (role === 'Student') {
        navigate('/student-dashboard');
      } else if (role === 'Parent') {
        navigate('/parent-dashboard');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="role" style={styles.label}>Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.select}
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Parent">Parent</option>
          </select>
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
  },
  button: {
    padding: '12px',
    backgroundColor: '#388E3C',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Login;
