import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setParentEmail }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState([]); // Track multiple errors
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = []; // Reset errors on each submit

    // Regex for validating emails
    const studentRegex = /^[a-z0-9._%+-]+@dlsl\.edu\.ph$/; // Student email regex
    const parentRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|dlsl\.edu\.ph)$/; // Parent email regex (Gmail/Yahoo/dlsl.edu.ph)

    // Email Validation
    if (!username) {
      newErrors.push('Please input your email.');
    } else {
      if (role === 'Student') {
        if (!studentRegex.test(username)) {
          if (!username.includes('@dlsl.edu.ph')) {
            newErrors.push('Please use the @dlsl.edu.ph format if you\'re a student.');
          } else if (/[A-Z]/.test(username)) {
            newErrors.push('Please only use small caps in inputting your email.');
          }
        }
      } else if (role === 'Parent') {
        if (!parentRegex.test(username)) {
          newErrors.push('Please use a valid Gmail, Yahoo, or DLSL email address.');
        }
      }
    }

    // Password Validation
    if (!password) {
      newErrors.push('Please fill in your password.');
    }

    // Role Validation
    if (!role) {
      newErrors.push('Please select a role.');
    }

    // If there are errors, set them and stop submission
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Authentication Logic (Fix)
    if (role === 'Student' && studentRegex.test(username)) {
      // Assume valid credentials for demo purposes
      navigate('/student-dashboard');
    } else if (role === 'Parent' && parentRegex.test(username)) {
      // After successful login, set the parent email in App.js
      setParentEmail(username); // This will update the parent email state in App.js
      navigate('/parent-dashboard');
    } else {
      setErrors(['Invalid username or password.']);
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
        {errors.length > 0 && (
          <div style={styles.errorContainer}>
            {errors.map((error, index) => (
              <p key={index} style={styles.error}>{error}</p>
            ))}
          </div>
        )}
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
  errorContainer: {
    marginTop: '10px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
    margin: '5px 0',
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
