import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className="login-container">
            <div className="login-card" style={{ maxWidth: '600px', textAlign: 'center' }}>
                <div className="success-icon" style={{ fontSize: '5rem', color: '#4ade80', marginBottom: '20px' }}>
                    <svg viewBox="0 0 24 24" width="80" height="80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>
                <div className="login-header">
                    <h2>Admission Form Received!</h2>
                    <p style={{ fontSize: '1.2rem', color: '#eee', marginTop: '10px' }}>
                        Thank you for choosing <strong>Happy Paradise</strong>.
                    </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '16px', margin: '30px 0', textAlign: 'left' }}>
                    <h3 style={{ color: 'var(--secondary)', marginBottom: '15px' }}>What happens next?</h3>
                    <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: '1.8' }}>
                        <li>✨ Our admission team will review your application.</li>
                        <li>📞 You will receive a call within 24-48 hours for verification.</li>
                        <li>💬 We will guide you through the next steps for batch allotment.</li>
                        <li>📍 Visit us at the studio to complete the formal registration.</li>
                    </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <Link to="/" className="login-btn" style={{ textDecoration: 'none' }}>
                        Return to Home
                    </Link>
                    <a href="https://wa.me/919843468986" className="btn btn-outline" style={{ display: 'block', textDecoration: 'none', background: 'transparent', border: '2px solid #25D366', color: '#25D366' }}>
                        Chat with Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
