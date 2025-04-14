import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrations } from '../services/api';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [registrationData, setRegistrationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('applications');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Stats data
  const stats = [
    { id: 1, name: 'Pending Applications', value: registrationData.filter(reg => reg.status === 'pending').length, icon: '⏳', color: 'from-amber-400 to-amber-600' },
    { id: 2, name: 'Approved Applications', value: registrationData.filter(reg => reg.status === 'approved').length, icon: '✅', color: 'from-green-400 to-green-600' },
    { id: 3, name: 'Rejected Applications', value: registrationData.filter(reg => reg.status === 'rejected').length, icon: '❌', color: 'from-red-400 to-red-600' },
    { id: 4, name: 'Total Applications', value: registrationData.length, icon: '📊', color: 'from-blue-400 to-blue-600' },
  ];

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchRegistrations = async () => {
      try {
        const response = await registrations.getAll();
        setRegistrationData(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        } else {
          setError('Failed to fetch registrations');
        }
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-900/30 text-green-400 border-green-500';
      case 'rejected':
        return 'bg-red-900/30 text-red-400 border-red-500';
      default:
        return 'bg-amber-900/30 text-amber-400 border-amber-500';
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await registrations.updateStatus(id, newStatus);
      setRegistrationData(prevData =>
        prevData.map(reg =>
          reg._id === id ? { ...reg, status: newStatus } : reg
        )
      );
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      } else {
        setError('Failed to update status');
      }
    }
  };

  const filteredData = registrationData.filter(
    (reg) => 
      reg.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
          <div className="text-xl font-medium text-blue-400">Loading dashboard data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Navigation Bar */}
      <header className="bg-gray-800/80 backdrop-blur-md fixed top-0 left-0 right-0 z-10 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                Racdemy Admin
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white flex items-center px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage student applications and monitor enrollment statistics</p>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-6"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-red-400">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} mr-4`}>
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{stat.name}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-700">
          <nav className="flex space-x-6">
            <button
              onClick={() => setActiveTab('applications')}
              className={`pb-4 px-1 ${
                activeTab === 'applications'
                  ? 'border-b-2 border-blue-500 text-blue-400 font-medium'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`pb-4 px-1 ${
                activeTab === 'analytics'
                  ? 'border-b-2 border-blue-500 text-blue-400 font-medium'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`pb-4 px-1 ${
                activeTab === 'settings'
                  ? 'border-b-2 border-blue-500 text-blue-400 font-medium'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Content based on tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'applications' && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <h2 className="text-xl font-semibold mb-4 sm:mb-0">Registration Applications</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search applications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
                    />
                    <svg
                      className="w-4 h-4 text-gray-400 absolute left-3 top-2.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Table with glass morphism effect */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs uppercase tracking-wider border-b border-gray-700">
                        <th className="px-6 py-3 text-left">Full Name</th>
                        <th className="px-6 py-3 text-left">Email</th>
                        <th className="px-6 py-3 text-left">WhatsApp</th>
                        <th className="px-6 py-3 text-left">Education</th>
                        <th className="px-6 py-3 text-left">Location</th>
                        <th className="px-6 py-3 text-left">Status</th>
                        <th className="px-6 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="px-6 py-10 text-center text-gray-400">
                            <div className="flex flex-col items-center">
                              <svg
                                className="w-12 h-12 mb-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1}
                                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <p className="text-lg">No applications found</p>
                              {searchTerm && (
                                <button
                                  onClick={() => setSearchTerm('')}
                                  className="mt-2 text-blue-400 hover:text-blue-300"
                                >
                                  Clear search
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredData.map((registration) => (
                          <tr 
                            key={registration._id} 
                            className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors duration-150"
                          >
                            <td className="px-6 py-4 whitespace-nowrap font-medium">{registration.fullName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-300">{registration.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-300">{registration.whatsapp}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                              {registration.educationLevel} - {registration.institutionName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-300">{registration.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusBadgeClass(registration.status)}`}>
                                {registration.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleStatusUpdate(registration._id, 'approved')}
                                  className="px-3 py-1.5 text-xs bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-500 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                  disabled={registration.status === 'approved'}
                                >
                                  Approve
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleStatusUpdate(registration._id, 'rejected')}
                                  className="px-3 py-1.5 text-xs bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-500 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                  disabled={registration.status === 'rejected'}
                                >
                                  Reject
                                </motion.button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl shadow-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-6">Analytics Dashboard</h2>
              <div className="text-gray-300 text-center py-10">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <p className="text-lg mb-2">Analytics dashboard coming soon</p>
                <p className="max-w-md mx-auto">Detailed insights and reports about applications and enrollment trends will be available in this section.</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl shadow-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-6">Admin Settings</h2>
              <div className="text-gray-300 text-center py-10">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-lg mb-2">Settings dashboard coming soon</p>
                <p className="max-w-md mx-auto">Admin profile and system configuration options will be available in this section.</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard; 