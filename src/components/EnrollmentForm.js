import React, { useState } from 'react';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    course: '', // Default to an empty string to ensure validation works
    email: '',
    paymentType: 'Gcash', // Default value
    paymentAmount: '', // User input for payment amount
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { firstName, lastName, course, email, paymentAmount } = formData;
    if (!firstName || !lastName || !course || !email || !paymentAmount) {
      alert('All fields are required. Please complete the form.');
      return;
    }

    // Validate email format
    if (!email.includes('@') || !email.includes('.')) {
      alert('Invalid email address. Please include "@" and "." in your email.');
      return;
    }

    // Check payment amount is valid (>= 7000)
    if (Number(paymentAmount) < 7000) {
      alert('Payment amount must be at least 7000 pesos.');
      return;
    }

    // Successful submission
    alert(
      `Enrollment submitted for ${firstName} ${lastName}, Course: ${course}, Payment Type: ${formData.paymentType}, Amount: ${paymentAmount}`
    );

    // Redirect to GCash
    window.open('https://gcash.com', '_blank');
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

        {/* Updated Course Section as a Select */}
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
          />
        </div>

        {/* Select Section for Payment Type */}
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

        {/* Input Section for Payment Amount */}
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
};

export default EnrollmentForm;
