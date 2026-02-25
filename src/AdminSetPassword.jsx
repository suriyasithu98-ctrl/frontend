import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSetPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get existing password or default
        const savedPassword = localStorage.getItem('adminPassword') || 'suriya030298@';

        if (formData.currentPassword !== savedPassword) {
            setError('Current password is incorrect');
            setMessage('');
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            setError('New passwords do not match');
            setMessage('');
            return;
        }

        if (formData.newPassword.length < 6) {
            setError('Password must be at least 6 characters long');
            setMessage('');
            return;
        }

        // Save new password
        localStorage.setItem('adminPassword', formData.newPassword);
        setError('');
        setMessage('Password updated successfully!');

        setTimeout(() => {
            navigate('/admin-login');
        }, 2000);
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">
                <div className="admin-header">
                    <img src="/logo.png" alt="Happy Paradise Logo" className="admin-logo" />
                    <h2>Set Admin <span>Password</span></h2>
                    <p>Update your portal access credentials</p>
                </div>

                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="form-group">
                        <label htmlFor="currentPassword">Current Password</label>
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            placeholder="Enter current password"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder="Minimum 6 characters"
                            value={formData.newPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Re-type new password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}
                    {message && <p className="success-message" style={{ color: '#4CAF50', textAlign: 'center', marginBottom: '15px' }}>{message}</p>}

                    <button type="submit" className="admin-btn">
                        Update Password
                    </button>
                </form>

                <div className="admin-footer">
                    <Link to="/admin-dashboard" className="back-home">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminSetPassword;
