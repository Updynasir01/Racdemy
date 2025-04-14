import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Alumni from './pages/Alumni';
import Registration from './pages/Registration';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import AdminDashboard from './pages/AdminDashboard';
import { Navigate } from 'react-router-dom';

// Admin route protection component
const ProtectedAdminRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/register" element={<Registration />} />

      {/* Admin routes */}
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        }
      />
    </Routes>
  );
} 