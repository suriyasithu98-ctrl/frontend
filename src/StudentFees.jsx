import React from 'react';
import { Link } from 'react-router-dom';

const StudentFees = () => {
    const feeHistory = [
        { month: 'February 2026', amount: '₹1500', status: 'Paid', date: 'Feb 05, 2026', method: 'UPI' },
        { month: 'January 2026', amount: '₹1500', status: 'Paid', date: 'Jan 04, 2026', method: 'Cash' },
        { month: 'December 2025', amount: '₹1500', status: 'Paid', date: 'Dec 07, 2025', method: 'UPI' },
        { month: 'November 2025', amount: '₹1500', status: 'Paid', date: 'Nov 02, 2025', method: 'UPI' },
    ];

    return (
        <div className="dashboard-container">
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="welcome-section">
                        <h1>My <span className="student-name-highlight">Fees Details</span></h1>
                        <p className="student-id-display">Student ID: <span>HP-2026-0842</span></p>
                    </div>
                    <Link to="/dashboard" className="logout-btn" style={{ textDecoration: 'none' }}>Back to Dashboard</Link>
                </header>

                <div className="dashboard-grid">
                    <div className="dashboard-card status-card full-width">
                        <h3>Current Status</h3>
                        <div className="fee-summary-row">
                            <div className="fee-stat">
                                <span className="label">Next Due Date</span>
                                <span className="value">March 05, 2026</span>
                            </div>
                            <div className="fee-stat">
                                <span className="label">Monthly Fee</span>
                                <span className="value">₹1,500</span>
                            </div>
                            <div className="fee-stat">
                                <span className="label">Status</span>
                                <span className="status-tag active">Up to Date</span>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card full-width">
                        <h3>Payment History</h3>
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Date Paid</th>
                                        <th>Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeHistory.map((fee, index) => (
                                        <tr key={index}>
                                            <td>{fee.month}</td>
                                            <td>{fee.amount}</td>
                                            <td><span className="status-tag active">{fee.status}</span></td>
                                            <td>{fee.date}</td>
                                            <td>{fee.method}</td>
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

export default StudentFees;
