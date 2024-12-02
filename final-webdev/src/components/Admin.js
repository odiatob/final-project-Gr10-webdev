import React, { useState, useEffect } from 'react';

const Admin = ({ students, onApprove }) => {
  const [approvedStudents, setApprovedStudents] = useState([]);

  useEffect(() => {
    // Load approved students from local storage or API if available
    // For now, we're assuming `students` comes as a prop, which is an array of student objects
    const approvedList = students.filter(student => student.isApproved);
    setApprovedStudents(approvedList);
  }, [students]);

  const handleApprove = (studentId) => {
    // Update the approval status for the student (e.g., set `isApproved` to true)
    onApprove(studentId);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Dashboard</h2>
      
      <div style={styles.studentList}>
        <h3 style={styles.subtitle}>Pending Approvals</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.filter(student => !student.isApproved).map((student) => (
              <tr key={student.id}>
                <td>{student.firstName} {student.lastName}</td>
                <td>{student.course}</td>
                <td>{student.email}</td>
                <td>
                  <button 
                    onClick={() => handleApprove(student.id)} 
                    style={styles.approveButton}>
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.approvedStudents}>
        <h3 style={styles.subtitle}>Approved Students</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {approvedStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.firstName} {student.lastName}</td>
                <td>{student.course}</td>
                <td>{student.email}</td>
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
    maxWidth: '900px',
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
  subtitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#388E3C',
  },
  studentList: {
    marginBottom: '30px',
  },
  approvedStudents: {
    marginBottom: '30px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHead: {
    backgroundColor: '#f1f1f1',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: '10px',
    border: '1px solid #ccc',
  },
  approveButton: {
    padding: '8px 16px',
    backgroundColor: '#388E3C',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Admin;
