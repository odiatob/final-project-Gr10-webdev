import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ParentDashboard = ({ parentEmail }) => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([
    { id: 1, name: "Ian Tracy C. Orillaza", yearLevel: "1st Year College", program: "BS in Comsci", status: "Pending" },
    { id: 2, name: "Wryce Eyrie Hizon", yearLevel: "3rd Year College", program: "BS in Comsci", status: "Enrolled" },
    { id: 3, name: "Rice Ariel Hizon", yearLevel: "4th Year College", program: "BS in Comsci", status: "Pending" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", yearLevel: "", program: "" });
  const [studentToRemove, setStudentToRemove] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleStudentClick = (id) => {
    navigate(`/student-details/${id}`);
  };

  const handleAddStudent = () => {
    // Basic validation for input fields
    if (newStudent.name && newStudent.yearLevel && newStudent.program) {
      const nextId = students.length ? students[students.length - 1].id + 1 : 1;
      setStudents([...students, { id: nextId, ...newStudent, status: "Pending" }]);
      setNewStudent({ name: "", yearLevel: "", program: "" });
      setErrorMessage("");  // Clear any error message
    } else {
      setErrorMessage("Please fill out all fields for the new student.");
    }
  };

  const handleRemoveStudent = () => {
    if (studentToRemove.trim()) {
      const filteredStudents = students.filter(
        (student) => student.name.toLowerCase() !== studentToRemove.toLowerCase()
      );
      if (filteredStudents.length === students.length) {
        setErrorMessage("No student found with that name.");
      } else {
        setStudents(filteredStudents);
        setStudentToRemove("");
        setErrorMessage("");  // Clear error after successful removal
      }
    } else {
      setErrorMessage("Please enter a student's name to remove.");
    }
  };

  const handleLogout = () => {
    // Clear login information (this may involve clearing session storage, local storage, or context)
    // For now, let's assume it's a simple redirect, and no actual session management is involved.
    // You may want to clear any authentication tokens or local storage here if applicable.
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="dashboard">
      {/* Parent Email (Positioned on the left side) */}
      <div style={styles.parentEmail}>Parent: {parentEmail}</div>

      {/* Dashboard Content */}
      <h3>Student Lists</h3>  {/* Updated Heading */}

      {/* Error Message */}
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}

      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Year Level</th>
            <th>College Program</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td className="clickable" onClick={() => handleStudentClick(student.id)}>
                {student.name}
              </td>
              <td>{student.yearLevel}</td>
              <td>{student.program}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="controls">
        <div>
          <h4>Add New Student</h4>
          <input
            type="text"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Year Level"
            value={newStudent.yearLevel}
            onChange={(e) => setNewStudent({ ...newStudent, yearLevel: e.target.value })}
          />
          <input
            type="text"
            placeholder="College Program"
            value={newStudent.program}
            onChange={(e) => setNewStudent({ ...newStudent, program: e.target.value })}
          />
          <button onClick={handleAddStudent}>Add Student</button>
        </div>

        <div>
          <h4>Remove Student</h4>
          <input
            type="text"
            placeholder="Enter Student Name to Remove"
            value={studentToRemove}
            onChange={(e) => setStudentToRemove(e.target.value)}
          />
          <button onClick={handleRemoveStudent}>Remove Student</button>
        </div>

        {/* Removed the Logout Button under "Remove Student" */}
      </div>
    </div>
  );
};

const styles = {
  parentEmail: {
    position: "absolute",  // Ensures the email stays fixed in place
    top: "10px",          // Adjust as needed for positioning
    left: "20px",         // Aligns it to the left side
    fontSize: "16px",
    fontWeight: "bold",
    color: "#2e7d32", // Color for parent email
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
    margin: "10px 0",
  },
};

export default ParentDashboard;
