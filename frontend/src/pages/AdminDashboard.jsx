import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrations } from '../services/api';

const AdminDashboard = () => {
  const [registrationData, setRegistrationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Logout
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Registration Applications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
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
                  {registrationData.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center text-gray-400">
                        No registrations found
                      </td>
                    </tr>
                  ) : (
                    registrationData.map((registration) => (
                      <tr key={registration._id} className="border-b border-gray-700 hover:bg-gray-700/50">
                        <td className="px-6 py-4">{registration.fullName}</td>
                        <td className="px-6 py-4">{registration.email}</td>
                        <td className="px-6 py-4">{registration.whatsapp}</td>
                        <td className="px-6 py-4">
                          {registration.educationLevel} - {registration.institutionName}
                        </td>
                        <td className="px-6 py-4">{registration.location}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusBadgeClass(registration.status)}`}>
                            {registration.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleStatusUpdate(registration._id, 'approved')}
                              className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={registration.status === 'approved'}
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(registration._id, 'rejected')}
                              className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={registration.status === 'rejected'}
                            >
                              Reject
                            </button>
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
      </div>
    </div>
  );
};

export default AdminDashboard; 