import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [enrollmentStatus, setEnrollmentStatus] = useState('Pending'); // Example enrollment status
  const [profileDetails, setProfileDetails] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [studentsList, setStudentsList] = useState([
    { name: 'John Doe', status: 'Enrolled' },
    { name: 'Jane Smith', status: 'Pending' },
  ]);

  // Handle enrollment form submission
  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    alert('Enrollment submitted!');
    setEnrollmentStatus('Submitted');
  };

  // Handle profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated!');
    // In a real application, this would update the backend
  };

  return (
    <div style={styles.dashboardContainer}>
      <h2>Welcome to the Student Dashboard</h2>

      {/* Enrollment Information */}
      <div style={styles.section}>
        <h3>Submit Enrollment Information</h3>
        <form onSubmit={handleEnrollmentSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Student Name"
            value={profileDetails.name}
            onChange={(e) => setProfileDetails({ ...profileDetails, name: e.target.value })}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={profileDetails.email}
            onChange={(e) => setProfileDetails({ ...profileDetails, email: e.target.value })}
            style={styles.input}
          />
          <textarea
            placeholder="Address"
            value={profileDetails.address}
            onChange={(e) => setProfileDetails({ ...profileDetails, address: e.target.value })}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Submit Enrollment</button>
        </form>
      </div>

      {/* Enrollment Status */}
      <div style={styles.section}>
        <h3>Enrollment Status</h3>
        <p>Status: {enrollmentStatus}</p>
      </div>

      {/* List of Enrolled Students */}
      <div style={styles.section}>
        <h3>List of Enrolled Students</h3>
        <ul>
          {studentsList.map((student, index) => (
            <li key={index}>{student.name} - {student.status}</li>
          ))}
        </ul>
      </div>

      {/* Update Profile */}
      <div style={styles.section}>
        <h3>Update Profile</h3>
        <form onSubmit={handleProfileUpdate} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            value={profileDetails.name}
            onChange={(e) => setProfileDetails({ ...profileDetails, name: e.target.value })}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={profileDetails.email}
            onChange={(e) => setProfileDetails({ ...profileDetails, email: e.target.value })}
            style={styles.input}
          />
          <textarea
            placeholder="Address"
            value={profileDetails.address}
            onChange={(e) => setProfileDetails({ ...profileDetails, address: e.target.value })}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Update Profile</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: '100px',
    resize: 'vertical',
  },
  button: {
    padding: '12px',
    backgroundColor: '#388E3C',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default StudentDashboard;
