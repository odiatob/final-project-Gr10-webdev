import React, { useEffect, useState } from 'react';
import { db } from './firebase';  // Your Firebase instance
import { doc, getDoc } from 'firebase/firestore';

const ApprovedStudentPage = ({ match }) => {
  const [student, setStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);
  const studentId = match.params.studentId;

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const studentDoc = await getDoc(doc(db, 'students', studentId));
        if (studentDoc.exists()) {
          setStudent(studentDoc.data());
          setSubjects(studentDoc.data().subjects || []); // Assuming subjects are stored in the student's document
        } else {
          setError('Student not found');
        }
      } catch (err) {
        setError('Error fetching student details');
      }
    };

    if (studentId) {
      fetchStudentDetails();
    }
  }, [studentId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {student.firstName} {student.lastName}</h2>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
      <p>Status: {student.status}</p>

      {/* Table of subjects, classrooms, and professors */}
      <h3>Your Class Schedule</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Classroom</th>
            <th>Professor</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.classroom}</td>
              <td>{subject.professor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedStudentPage;