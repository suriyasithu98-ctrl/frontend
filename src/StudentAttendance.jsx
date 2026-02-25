import React from 'react';
import { Link } from 'react-router-dom';

const StudentAttendance = () => {
    // Mock attendance data for February
    const attendanceRecords = [
        { date: 'Feb 16, 2026', day: 'Monday', status: 'Present', type: 'Adult Batch', time: '7:00 PM' },
        { date: 'Feb 14, 2026', day: 'Saturday', status: 'Present', type: 'Adult Batch', time: '7:00 PM' },
        { date: 'Feb 11, 2026', day: 'Wednesday', status: 'Present', type: 'Adult Batch', time: '7:00 PM' },
        { date: 'Feb 09, 2026', day: 'Monday', status: 'Absent', type: 'Adult Batch', time: '7:00 PM' },
        { date: 'Feb 07, 2026', day: 'Saturday', status: 'Present', type: 'Adult Batch', time: '7:00 PM' },
        { date: 'Feb 04, 2026', day: 'Wednesday', status: 'Present', type: 'Adult Batch', time: '7:00 PM' },
        { date: 'Feb 02, 2026', day: 'Monday', status: 'Present', type: 'Adult Batch', time: '7:00 PM' },
    ];

    const stats = {
        total: 7,
        present: 6,
        absent: 1,
        percentage: '85%'
    };

    return (
        <div className="dashboard-container">
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="welcome-section">
                        <h1>Class <span className="student-name-highlight">Attendance</span></h1>
                        <p className="student-id-display">Student ID: <span>HP-2026-0842</span></p>
                    </div>
                    <Link to="/dashboard" className="logout-btn" style={{ textDecoration: 'none' }}>Back to Dashboard</Link>
                </header>

                <div className="dashboard-grid">
                    <div className="dashboard-card status-card full-width">
                        <h3>Attendance Summary (Feb 2026)</h3>
                        <div className="fee-summary-row">
                            <div className="fee-stat">
                                <span className="label">Total Classes</span>
                                <span className="value">{stats.total}</span>
                            </div>
                            <div className="fee-stat">
                                <span className="label">Present</span>
                                <span className="value" style={{ color: '#4ade80' }}>{stats.present}</span>
                            </div>
                            <div className="fee-stat">
                                <span className="label">Absent</span>
                                <span className="value" style={{ color: '#f87171' }}>{stats.absent}</span>
                            </div>
                            <div className="fee-stat">
                                <span className="label">Attendance %</span>
                                <span className="value-highlight">{stats.percentage}</span>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card full-width">
                        <h3>Class Records</h3>
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Day</th>
                                        <th>Batch</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendanceRecords.map((record, index) => (
                                        <tr key={index}>
                                            <td>{record.date}</td>
                                            <td>{record.day}</td>
                                            <td>{record.type}</td>
                                            <td>{record.time}</td>
                                            <td>
                                                <span className={`status-tag ${record.status === 'Present' ? 'active' : 'overdue'}`}>
                                                    {record.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentAttendance;
