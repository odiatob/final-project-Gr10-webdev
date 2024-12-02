import React, { useState } from 'react';
import EnrollmentForm from './EnrollmentForm';

const ParentDashboard = () => {
  const [students, setStudents] = useState([]);

  // Function to add a student to the enrolled students list
  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <div>
      <h1>DLSL Enrollment System</h1>
      <h2>Parents Login</h2> {/* Updated header */}
      <EnrollmentForm addStudent={addStudent} />
      <h2>Enrolled Students</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No students enrolled yet.</p>
      )}
    </div>
  );
};

export default ParentDashboard;
