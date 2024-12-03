import React, { useEffect, useState } from 'react';
import { db } from './firebase';  // Ensure your Firebase instance is imported
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  // Fetching students from Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentsList);
    };
    fetchStudents();
  }, []);

  // Approve Student
  const approveStudent = async (studentId) => {
    const studentRef = doc(db, "students", studentId);
    await updateDoc(studentRef, { status: 'approved' });
    alert('Student approved!');
    // Re-fetch the data to reflect the change
    const updatedStudents = students.map(student => 
      student.id === studentId ? { ...student, status: 'approved' } : student
    );
    setStudents(updatedStudents);
  };

  // Delete Student
  const deleteStudent = async (studentId) => {
    const studentRef = doc(db, "students", studentId);
    await deleteDoc(studentRef);
    alert('Student deleted!');
    // Remove the deleted student from the state
    setStudents(students.filter(student => student.id !== studentId));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course</th>
            <th>Email</th>
            <th>Parent/Guardian Email</th> {/* Added Parent/Guardian Email column */}
            <th>Payment Type</th>
            <th>Payment Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.course}</td>
              <td>{student.email}</td>
              <td>{student.parentEmail || 'N/A'}</td> {/* Display Parent/Guardian Email */}
              <td>{student.paymentType}</td>
              <td>{student.paymentAmount}</td>
              <td>{student.status || 'Pending'}</td>
              <td>
                {/* Approval button */}
                <button onClick={() => approveStudent(student.id)} disabled={student.status === 'approved'}>
                  Approve
                </button>
                {/* Delete button */}
                <button onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;