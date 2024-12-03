// src/components/ParentsLogin.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig'; // Import db and auth from firebaseConfig

const ParentsLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [parentEmails, setParentEmails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all parent emails from Firestore (students collection)
    const getParentEmails = async () => {
      const studentsRef = collection(db, 'students');
      const q = query(studentsRef, where("parentEmail", "!=", ""));
      const querySnapshot = await getDocs(q);

      const emails = [];
      querySnapshot.forEach((doc) => {
        const studentData = doc.data();
        if (studentData.parentEmail) {
          emails.push(studentData.parentEmail);
        }
      });
      setParentEmails(emails); // Store the emails in state
    };

    getParentEmails();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the entered email matches any registered parent email
    if (!parentEmails.includes(email)) {
      alert('Unauthorized parent email.');
      return;
    }

    try {
      // Attempt to log the parent in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Successful login, redirect to Parent Dashboard
      alert('Login successful. Redirecting to Parent Dashboard.');
      navigate('/parent-dashboard'); // Redirect to the parent dashboard page (adjust as needed)
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Parent Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
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
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px',
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

export default ParentsLogin;
