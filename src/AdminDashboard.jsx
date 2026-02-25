import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [dashboardStats, setDashboardStats] = React.useState({
        totalStudents: '...',
        activeBatches: '...',
        newEnquiries: '...',
        revenue: '...'
    });
    const [recentAdmissions, setRecentAdmissions] = React.useState([]);

    React.useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const statsResponse = await fetch('http://localhost:5000/api/stats');
                const statsData = await statsResponse.json();
                setDashboardStats(statsData);

                const admissionsResponse = await fetch('http://localhost:5000/api/admissions');
                const admissionsData = await admissionsResponse.json();
                setRecentAdmissions(admissionsData.slice(0, 5)); // Show only latest 5
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };
        fetchDashboardData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin-login');
    };

    const stats = [
        { label: 'Total Students', value: dashboardStats.totalStudents, icon: '👥' },
        { label: 'Active Batches', value: dashboardStats.activeBatches, icon: '💃' },
        { label: 'New Enquiries', value: dashboardStats.newEnquiries, icon: '📩' },
        { label: 'Revenue (Feb)', value: dashboardStats.revenue, icon: '💰' }
    ];

    return (
        <div className="admin-dashboard-container">
            <header className="admin-dash-header">
                <div className="header-left">
                    <h1>Admin <span>Dashboard</span></h1>
                </div>
                <div className="header-right">
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
            </header>

            <div className="admin-stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-content-grid">
                <div className="dashboard-section table-section">
                    <div className="section-header">
                        <h2>Recent <span>Admissions</span></h2>
                        <Link to="#" className="view-all">View All</Link>
                    </div>
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Batch</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentAdmissions.map(adm => (
                                    <tr key={adm.id}>
                                        <td>{adm.fullName || adm.name}</td>
                                        <td>{adm.batch}</td>
                                        <td>{adm.date}</td>
                                        <td><button className="table-btn">Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-section side-section">
                    <h2>Quick <span>Actions</span></h2>
                    <div className="action-grid">
                        <button className="q-action-btn">Manage Attendance</button>
                        <button className="q-action-btn">Fee Collection</button>
                        <button className="q-action-btn">Update Gallery</button>
                        <button className="q-action-btn">Send Notice</button>
                        <Link to="/admin-set-password" style={{ textDecoration: 'none' }}>
                            <button className="q-action-btn" style={{ width: '100%', borderColor: 'rgba(255,107,0,0.3)' }}>Security Settings</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
