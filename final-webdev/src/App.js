import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';
import Login from './components/Login';
import Admin from './components/Admin';

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
