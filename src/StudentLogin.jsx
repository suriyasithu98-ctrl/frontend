import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        studentName: '',
        gmail: '',
        password: '',
        confirmPassword: ''
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
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.studentName,
                    password: formData.password,
                    email: formData.gmail,
                    type: 'student'
                }),
            });

            const data = await response.json();
            if (data.success) {
                setError('');
                localStorage.setItem('token', data.token);
                alert(`Registration Successful for ${formData.studentName}! Redirecting to your dashboard...`);
                navigate('/dashboard');
            } else {
                setError(data.message || 'Failed to register');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('A network error occurred');
        }
    };



    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <img src="/logo.png" alt="Happy Paradise Logo" className="login-logo" />
                    <h2>Student Registration</h2>
                    <p>Join the Happy Paradise Dance & Fitness family</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="studentName">Student Name</label>
                        <input
                            type="text"
                            id="studentName"
                            name="studentName"
                            placeholder="Enter your full name"
                            value={formData.studentName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="gmail">Gmail ID</label>
                        <input
                            type="email"
                            id="gmail"
                            name="gmail"
                            placeholder="example@gmail.com"
                            value={formData.gmail}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Create Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="login-btn">
                        Create Account
                    </button>
                </form>

                <div className="login-footer">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                    <Link to="/" className="back-home">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;
