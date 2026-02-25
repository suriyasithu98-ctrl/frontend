import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Enquiry from './Enquiry';
import StudentLogin from './StudentLogin';
import StudentDashboard from './StudentDashboard';
import StudentDetails from './StudentDetails';
import StudentFees from './StudentFees';
import StudentAttendance from './StudentAttendance';
import StudentAdmission from './StudentAdmission';
import ThankYou from './ThankYou';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AdminSetPassword from './AdminSetPassword';
import './index.css';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <div className="App">
      <ScrollToTop />
      <header>
        <div className="container nav-content">
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/logo.png" alt="Happy Paradise Logo" style={{ height: '60px', objectFit: 'contain' }} />
            <div>
              <div className="logo">
                HAPPY PARADISE
              </div>
              <div className="sub-heading" style={{ color: '#fff', fontSize: '0.9rem', opacity: 0.8 }}>
                Dance, Fitness & Entertainment
              </div>
            </div>
          </Link>
          <nav>
            <Link to="/" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px', fontWeight: '600' }}>Home</Link>
            <Link to="/student-login" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px', fontWeight: '600' }}>Student Login</Link>
            <Link to="/admin-login" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px', fontWeight: '600', opacity: 0.7 }}>Admin</Link>
            <Link to="/admission" className="nav-link" style={{ color: 'var(--secondary)', textDecoration: 'none', marginRight: '20px', fontWeight: '700' }}>Join Now</Link>
            <Link to="/enquiry" className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Enquiry</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/student-fees" element={<StudentFees />} />
        <Route path="/student-attendance" element={<StudentAttendance />} />
        <Route path="/admission" element={<StudentAdmission />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-set-password" element={<AdminSetPassword />} />
      </Routes>

      <footer>
        <div className="social-links" style={{ marginBottom: '15px' }}>
          <a href="https://www.instagram.com/happyparadisedanceandfitness?igsh=MW4xbXdsZDg5MXR0ag==" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px', fontSize: '1.2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            Follow us on Instagram
          </a>
          <a href="mailto:happyparadisedanceandfitness@gmail.com" style={{ color: '#fff', margin: '0 10px', fontSize: '1.2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            Gmail
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Happy Paradise Dance and Fitness Studio. All rights reserved.</p>
          <Link to="/admin-login" className="admin-link-footer">Admin Login</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
