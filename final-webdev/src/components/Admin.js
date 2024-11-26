import React, { useState } from 'react';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@dlsl.edu.ph', status: 'Pending' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@dlsl.edu.ph', status: 'Approved' },
  ]);
  const [notifications, setNotifications] = useState([]);

  const adminEmails = ['admin1@dlsl.edu.ph', 'admin2@dlsl.edu.ph', 'admin3@dlsl.edu.ph'];

  const handleLogin = () => {
    if (adminEmails.includes(email)) {
      setIsAdmin(true);
      setError('');
    } else {
      setError('Unauthorized access. Admin only.');
      setIsAdmin(false);
    }
  };

  const handleAction = (id, action) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, status: action === 'approve' ? 'Approved' : action === 'reject' ? 'Rejected' : 'Deleted' }
          : student
      ).filter((student) => (action === 'delete' ? student.id !== id : true))
    );
  };

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
  };

  return (
    <div style={styles.container}>
      {!isAdmin ? (
        <div style={styles.login}>
          <h2 style={styles.title}>Admin Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter admin email"
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>Login</button>
          {error && <p style={styles.error}>{error}</p>}
        </div>
      ) : (
        <div>
          <h2 style={styles.title}>Admin Dashboard</h2>
          <h3>Manage Users</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.status}</td>
                  <td>
                    <button onClick={() => handleAction(student.id, 'approve')} style={styles.actionButton}>Approve</button>
                    <button onClick={() => handleAction(student.id, 'reject')} style={styles.actionButton}>Reject</button>
                    <button onClick={() => handleAction(student.id, 'delete')} style={styles.actionButton}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>System Notifications</h3>
          <div>
            <textarea
              rows="3"
              placeholder="Write a notification..."
              style={styles.textarea}
              onBlur={(e) => addNotification(e.target.value)}
            />
            <ul style={styles.notifications}>
              {notifications.map((notif, index) => (
                <li key={index}>{notif}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  login: {
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  actionButton: {
    margin: '0 5px',
    padding: '5px 10px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  textarea: {
    width: '100%',
    marginTop: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  notifications: {
    marginTop: '10px',
    listStyleType: 'none',
    padding: 0,
  },
};

export default Admin;
