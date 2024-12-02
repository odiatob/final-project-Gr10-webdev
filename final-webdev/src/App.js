import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionValidation from './components/TransactionValidation'; // Import the TransactionValidation component
import Home from './components/Home';
import Header from './components/Header';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';
import Login from './components/Login';
import Admin from './components/Admin';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/transaction-validation" element={<TransactionValidation />} /> {/* Added the route for TransactionValidation */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

export default App;
