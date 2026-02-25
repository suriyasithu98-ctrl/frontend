import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentAdmission = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        gender: '',
        bloodGroup: '',
        phone: '',
        email: '',
        address: '',
        parentName: '',
        parentPhone: '',
        batch: '',
        classType: '',
        medicalConditions: '',
        agreed: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/admission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Admission submitted successfully');
                navigate('/thank-you');
            } else {
                console.error('Failed to submit admission');
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting admission:', error);
            alert('A network error occurred.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card" style={{ maxWidth: '800px', margin: '40px auto' }}>
                <div className="login-header">
                    <img src="/logo.png" alt="Happy Paradise Logo" className="login-logo" />
                    <h2>Student Admission</h2>
                    <p>Register for your journey at Happy Paradise</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {/* Personal Details */}
                        <div className="form-section">
                            <h3 style={{ color: 'var(--secondary)', marginBottom: '15px', fontSize: '1.1rem' }}>Personal Details</h3>
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Student's Name" />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth *</label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Gender *</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} required style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white' }}>
                                    <option value="" style={{ background: '#333' }}>Select Gender</option>
                                    <option value="Male" style={{ background: '#333' }}>Male</option>
                                    <option value="Female" style={{ background: '#333' }}>Female</option>
                                    <option value="Other" style={{ background: '#333' }}>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Blood Group</label>
                                <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="e.g. A+ve" />
                            </div>
                        </div>

                        {/* Contact & Emergency */}
                        <div className="form-section">
                            <h3 style={{ color: 'var(--secondary)', marginBottom: '15px', fontSize: '1.1rem' }}>Contact & Emergency</h3>
                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Contact Number" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Parent/Guardian Name *</label>
                                <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label>Emergency Phone *</label>
                                <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} required placeholder="Emergency Contact" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '20px' }}>
                        <label>Permanent Address *</label>
                        <textarea name="address" value={formData.address} onChange={handleChange} required placeholder="Full Address" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', minHeight: '80px' }}></textarea>
                    </div>

                    <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                        <div className="form-group">
                            <label>Select Batch *</label>
                            <select name="batch" value={formData.batch} onChange={handleChange} required style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white' }}>
                                <option value="" style={{ background: '#333' }}>Select Batch</option>
                                <option value="Kids Batch" style={{ background: '#333' }}>Kids Batch</option>
                                <option value="Junior Batch" style={{ background: '#333' }}>Junior Batch</option>
                                <option value="Adult Batch" style={{ background: '#333' }}>Adult Batch</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Class Type *</label>
                            <select name="classType" value={formData.classType} onChange={handleChange} required style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white' }}>
                                <option value="" style={{ background: '#333' }}>Select Class</option>
                                <option value="Dance" style={{ background: '#333' }}>Dance</option>
                                <option value="Zumba" style={{ background: '#333' }}>Zumba & Fitness</option>
                                <option value="Classical" style={{ background: '#333' }}>Classical Dance</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '20px' }}>
                        <label>Any Medical Conditions / Allergies</label>
                        <textarea name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} placeholder="Mention if any" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', minHeight: '60px' }}></textarea>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                        <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} required style={{ width: 'auto' }} />
                        <label style={{ margin: 0, fontSize: '0.85rem' }}>I agree to follow the studio rules and certify that the information provided is correct.</label>
                    </div>

                    <button type="submit" className="login-btn" style={{ marginTop: '30px' }}>
                        Submit Admission Form
                    </button>
                </form>

                <div className="login-footer">
                    <Link to="/" className="back-home">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default StudentAdmission;
