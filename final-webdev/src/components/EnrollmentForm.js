import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';  // Import your Firebase instance
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    course: '',
    email: '',
    parentEmail: '',  // New field for Parent/Guardian Email
    paymentType: 'Gcash',
    paymentAmount: '',
  });

  const [emailExists, setEmailExists] = useState(false);  // State for checking if email exists
  const [parentEmailRegistered, setParentEmailRegistered] = useState(false);  // State to check if parent email is associated with a student
  const navigate = useNavigate();

  // Function to check if the email already exists in Firestore
  const checkEmailExists = async (email) => {
    const querySnapshot = await getDocs(collection(db, "students"));
    const existingEmails = querySnapshot.docs.map(doc => doc.data().email);
    return existingEmails.includes(email);
  };

  // Function to check if parent email is already associated with a student
  const checkParentEmailExists = async (parentEmail) => {
    const q = query(collection(db, 'students'), where('parentEmail', '==', parentEmail));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  useEffect(() => {
    const validateEmail = async () => {
      if (formData.email) {
        const isEmailExists = await checkEmailExists(formData.email);
        setEmailExists(isEmailExists);  // Update emailExists state based on result
      }
    };
    validateEmail();
  }, [formData.email]);  // Run this effect whenever the email changes

  useEffect(() => {
    const validateParentEmail = async () => {
      if (formData.parentEmail) {
        const isParentEmailRegistered = await checkParentEmailExists(formData.parentEmail);
        setParentEmailRegistered(isParentEmailRegistered);  // Update parentEmailRegistered state based on result
      }
    };
    validateParentEmail();
  }, [formData.parentEmail]);  // Run this effect whenever the parent email changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, course, email, parentEmail, paymentAmount } = formData;

    // Validate form fields
    if (!firstName || !lastName || !course || !email || !paymentAmount) {
      alert('All fields are required. Please complete the form.');
      return;
    }

    // Check if email already exists
    if (emailExists) {
      alert('This email is already registered. You have already submitted your enrollment. Redirecting to your dashboard...');
      navigate('/student-dashboard');  // Redirect to student dashboard if email exists
      return;
    }

    // Validate email format
    if (!email.includes('@') || !email.includes('.')) {
      alert('Invalid email address. Please include "@" and "." in your email.');
      return;
    }

    // Validate payment amount
    if (Number(paymentAmount) < 7000) {
      alert('Payment amount must be at least 7000 pesos.');
      return;
    }

    if (Number(paymentAmount) > 50000) {
      alert('Payment amount must be below 50000 pesos.');
      return;
    }

    window.open('https://www.gcash.com', '_blank');

    // Save data to Firestore with initial 'pending' status
    try {
      await addDoc(collection(db, 'students'), {
        firstName,
        lastName,
        course,
        email,
        parentEmail,  // Store the parent's email in Firestore
        paymentType: formData.paymentType,
        paymentAmount,
        status: 'pending',  // Set initial status as pending
      });
      alert(`Enrollment submitted for ${firstName} ${lastName}`);
      navigate('/transaction-validation');  // Redirect to validation page
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('There was an error submitting your enrollment.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Enrollment Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">-- Select a Course --</option>
            <option value="BS Computer Science">BS Computer Science</option>
            <option value="BS Information Technology">BS Information Technology</option>
            <option value="BS Entertainment Multimedia Computing">BS Entertainment Multimedia Computing</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {emailExists && <span style={styles.error}>This email is already registered.</span>}  {/* Error message */}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="parentEmail">Parent/Guardian Email (Optional):</label>
          <input
            type="email"
            id="parentEmail"
            name="parentEmail"
            value={formData.parentEmail}
            onChange={handleChange}
            style={styles.input}
          />
          {parentEmailRegistered && (
            <p style={styles.infoText}>This parent email is already associated with a student.</p>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="paymentType">Type of Payment:</label>
          <select
            id="paymentType"
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="Gcash">Gcash</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="paymentAmount">Amount of Payment:</label>
          <input
            type="number"
            id="paymentAmount"
            name="paymentAmount"
            value={formData.paymentAmount}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter amount (minimum 7000)"
            required
          />
        </div>

        <button type="submit" style={styles.submitButton}>Submit Enrollment</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#388E3C',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#555',
  },
  input: {
    padding: '10px',
    marginTop: '5px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '10px',
    marginTop: '5px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '18px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
  infoText: {
    color: 'blue',
    fontSize: '14px',
    marginTop: '5px',
  },
};

export default EnrollmentForm;
