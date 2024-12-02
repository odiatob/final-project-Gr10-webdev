import React, { useState } from 'react';

const Admin = () => {
  // Sample student data for demonstration
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', course: 'BS Computer Science', status: 'Pending' },
    { id: 2, name: 'Jane Smith', course: 'BS Information Technology', status: 'Pending' },
    { id: 3, name: 'Mark Johnson', course: 'BS Entertainment Multimedia Computing', status: 'Pending' },
  ]);

  const handleAction = (id, action) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status: action === 'edit' ? student.status : action === 'approve' ? 'Approved' : 'Rejected',
            }
          : student
      )
    );
  };

  const handleEdit = (id) => {
    const newName = prompt('Enter new name:');
    const newCourse = prompt('Enter new course:');
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, name: newName || student.name, course: newCourse || student.course }
          : student
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>
      <p style={styles.description}>Manage student accounts below:</p>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={styles.td}>{student.name}</td>
                <td style={styles.td}>{student.course}</td>
                <td style={styles.td}>{student.status}</td>
                <td style={styles.td}>
                  <button style={styles.button} onClick={() => handleAction(student.id, 'approve')}>
                    Approve
                  </button>
                  <button style={styles.button} onClick={() => handleAction(student.id, 'reject')}>
                    Reject
                  </button>
                  <button style={styles.button} onClick={() => handleEdit(student.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '50px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4CAF50',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
  button: {
    padding: '5px 10px',
    margin: '0 5px',
    fontSize: '14px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Admin;
