import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Add this line
import Home from './components/Home'; // Adjust path if needed
import EnrollmentForm from './components/EnrollmentForm'; // Adjust path if needed

function App() {
  return (
    <Router>
      <Header /> {/* Include Header here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<EnrollmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
