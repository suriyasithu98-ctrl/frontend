import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                    type: 'admin'
                }),
            });

            const data = await response.json();
            if (data.success) {
                setError('');
                localStorage.setItem('isAdmin', 'true');
                localStorage.setItem('token', data.token);
                navigate('/admin-dashboard');
            } else {
                setError(data.message || 'Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('A network error occurred');
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">
                <div className="admin-header">
                    <img src="/logo.png" alt="Happy Paradise Logo" className="admin-logo" />
                    <h2>Admin Portal</h2>
                    <p>Enter your credentials to access the dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Admin ID"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="admin-btn">
                        Login to Portal
                    </button>
                </form>

                <div className="admin-footer">
                    <Link to="/" className="back-home">Back to Website</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
