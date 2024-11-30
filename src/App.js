import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import ParentDashboard from './components/ParentDashboard';

const App = () => {
  const [loggedInParentEmail, setLoggedInParentEmail] = useState(null); // State for storing parent email

  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Pass loggedInParentEmail and setLoggedInParentEmail to Header */}
        <Header parentEmail={loggedInParentEmail} setParentEmail={setLoggedInParentEmail} />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enroll" element={<EnrollmentForm />} />
            {/* Pass setLoggedInParentEmail as a prop to Login */}
            <Route 
              path="/login" 
              element={<Login setParentEmail={setLoggedInParentEmail} />} 
            />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            {/* Pass loggedInParentEmail to ParentDashboard */}
            <Route 
              path="/parent-dashboard" 
              element={<ParentDashboard parentEmail={loggedInParentEmail} />} 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default App;
