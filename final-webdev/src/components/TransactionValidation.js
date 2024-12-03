import React from 'react';

const TransactionValidation = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Enrollment Request Submitted</h2>
      <p style={styles.message}>
        Your enrollment request has been successfully submitted. Please wait for approval from the admin. You will be notified once your enrollment is approved.
      </p>
      <p style={styles.info}>
        In the meantime, feel free to contact the school office for further inquiries or visit the DLSL website for updates.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    background: '#ecf0f1',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: '"Lora", serif', // Font style for the container
  },
  title: {
    color: '#2c3e50',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontFamily: '"Poppins", sans-serif', // Font for the title
  },
  message: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#34495e',
    marginBottom: '20px',
    fontFamily: '"Lora", serif', // Font for the message text
  },
  info: {
    fontSize: '16px',
    color: '#7f8c8d',
    fontFamily: '"Lora", serif', // Font for additional information
  },
};

export default TransactionValidation;