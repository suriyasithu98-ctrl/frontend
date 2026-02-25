import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentDetails = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: 'Arun Kumar',
        dob: '',
        address: '',
        phone: '98434 68986',
        gender: 'Male'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Student Details Updated:', formData);
        alert('Details saved successfully!');
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className="login-card" style={{ maxWidth: '600px' }}>
                <div className="login-header">
                    <img src="/logo.png" alt="Happy Paradise Logo" className="login-logo" />
                    <h2>Student Details</h2>
                    <p>Complete your profile information</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Enter your permanent address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '14px 20px',
                                background: 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                color: 'white',
                                minHeight: '100px',
                                fontFamily: 'inherit'
                            }}
                        ></textarea>
                    </div>

                    <button type="submit" className="login-btn">
                        Save Details
                    </button>
                </form>

                <div className="login-footer">
                    <Link to="/dashboard" className="back-home">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
