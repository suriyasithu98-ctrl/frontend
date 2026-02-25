import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear auth logic here if any
        navigate('/');
    };

    const scheduledClasses = [
        { day: 'Mon', time: '7:00 PM - 8:00 PM', name: 'Adult Batch', type: 'Dance' },
        { day: 'Wed', time: '7:00 PM - 8:00 PM', name: 'Adult Batch', type: 'Dance' },
        { day: 'Fri', time: '7:00 PM - 8:00 PM', name: 'Kids & Junior Batch', type: 'Dance' },
        { day: 'Sat', time: '5:00 PM - 7:00 PM', name: 'Classical Dance', type: 'Classical' },
        { day: 'Sat', time: '7:00 PM - 8:00 PM', name: 'Adult Batch', type: 'Dance' },
        { day: 'Sat', time: '7:00 PM - 8:00 PM', name: 'Kids & Junior Batch', type: 'Dance' },
        { day: 'Sun', time: '10:00 AM - 12:00 PM', name: 'Classical Dance', type: 'Classical' },
        { day: 'Sun', time: '4:00 PM - 5:00 PM', name: 'Kids & Junior Batch', type: 'Dance' },
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar / Sidebar Navigation can be added later if needed */}

            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="welcome-section">
                        <h1>Welcome back, <span className="student-name-highlight">Arun Kumar!</span></h1>
                        <p className="student-id-display">Student ID: <span>HP-2026-0842</span></p>
                    </div>
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                </header>

                <div className="dashboard-grid">
                    {/* Active Classes Card */}
                    <div className="dashboard-card status-card">
                        <h3>My Enrolled Batches</h3>
                        <div className="batch-list">
                            <div className="batch-item">
                                <img src="/gallery/1000166707.jpg" alt="Kids Batch" className="batch-img" style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover', marginRight: '15px' }} />
                                <div className="batch-info">
                                    <h4>Kids Batch</h4>
                                    <p>Mon / Wed / Fri</p>
                                </div>
                                <span className="status-tag active">Active</span>
                            </div>
                            <div className="batch-item">
                                <img src="/gallery/1000008272.jpg" alt="Zumba" className="batch-img" style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover', marginRight: '15px' }} />
                                <div className="batch-info">
                                    <h4>Zumba (Online)</h4>
                                    <p>Daily at 5:30 PM</p>
                                </div>
                                <span className="status-tag trial">Trial</span>
                            </div>
                        </div>
                    </div>

                    {/* Fees Status Card */}
                    <div className="dashboard-card status-card">
                        <h3>My Fee Status</h3>
                        <div className="fee-summary">
                            <div className="fee-info">
                                <h4>February 2026</h4>
                                <p>Next due: Mar 05</p>
                            </div>
                            <div className="fee-status">
                                <span className="status-tag active">Paid</span>
                                <Link to="/student-fees" className="view-link">Details</Link>
                            </div>
                        </div>
                    </div>

                    {/* Attendance Card */}
                    <div className="dashboard-card status-card">
                        <h3>My Attendance</h3>
                        <div className="attendance-summary">
                            <div className="stat-circle">
                                <span className="stat-value">85%</span>
                                <span className="stat-label">Feb '26</span>
                            </div>
                            <div className="attendance-links">
                                <p>6 Present / 1 Absent</p>
                                <Link to="/student-attendance" className="view-link">Full Record</Link>
                            </div>
                        </div>
                    </div>

                    {/* Schedule Card */}
                    <div className="dashboard-card schedule-card">
                        <h3>Weekly Schedule</h3>
                        <div className="schedule-list">
                            {scheduledClasses.map((item, index) => (
                                <div key={index} className="schedule-item">
                                    <div className="day-box">{item.day}</div>
                                    <div className="class-details">
                                        <div className="class-name">{item.name}</div>
                                        <div className="class-time">{item.time} • {item.type}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="dashboard-card actions-card">
                        <h3>Quick Actions</h3>
                        <div className="action-buttons">
                            <button className="action-btn primary">Join Live Session</button>
                            <Link to="/student-details" className="action-btn outline">Complete / Edit Profile</Link>
                            <Link to="/gallery" className="action-btn outline">View Practice Videos</Link>
                            <a href="https://wa.me/919843468986" className="action-btn outline">Contact Support</a>
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="dashboard-card notice-card">
                        <h3>Announcements</h3>
                        <div className="notice-item">
                            <p>✨ New Wedding Choreography workshop starts next Sunday!</p>
                            <small>Posted 2 hours ago</small>
                        </div>
                        <div className="notice-item">
                            <p>🎥 Last week's Zumba class recording is now available.</p>
                            <small>Posted yesterday</small>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
