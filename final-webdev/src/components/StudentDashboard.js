import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    // Fetch student data (in a real app, you would fetch this from an API)
    const student = JSON.parse(localStorage.getItem('studentData')); // Mock data from localStorage or API
    if (student && student.isApproved) {
      setStudentData(student);
    } else {
      // If not approved, redirect or show a message
      window.location.href = '/'; // Redirect to homepage or show a message
    }
  }, []);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h2>Student Dashboard</h2>
      <div>
        <h3>Course of Record (COR)</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Professor</th>
              <th>Classroom</th>
            </tr>
          </thead>
          <tbody>
            {studentData.subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.professor}</td>
                <td>{subject.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>Remaining Tuition Fee: ₱{studentData.remainingTuition}</h4>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
};

export default StudentDashboard;