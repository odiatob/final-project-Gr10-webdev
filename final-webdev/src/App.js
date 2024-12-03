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
import ParentsLogin from './components/ParentsLogin'; // Import the ParentsLogin component
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/transaction-validation" element={<TransactionValidation />} /> {/* Added the route for TransactionValidation */}
          
          {/* Admin and Student Dashboard */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Students and Parents access the same dashboard */}
          
          {/* Parents Login */}
          <Route path="/parents-login" element={<ParentsLogin />} /> {/* Added the route for ParentsLogin */}
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
