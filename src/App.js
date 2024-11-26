import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';
import Login from './components/Login'

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Header */}
        <Header />
        {/* Main Content */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enroll" element={<EnrollmentForm />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
        {/* Footer */}
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
  content: {
    flex: 1, // Ensures content takes up available space
    padding: '20px',
  },
};

export default App;
