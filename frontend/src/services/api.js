import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
};

export const programs = {
  getAll: () => api.get('/programs'),
  getById: (id) => api.get(`/programs/${id}`),
  create: (programData) => api.post('/programs', programData),
  update: (id, programData) => api.put(`/programs/${id}`, programData),
  delete: (id) => api.delete(`/programs/${id}`),
};

export const registrations = {
  getAll: () => {
    const token = localStorage.getItem('adminToken');
    return api.get('/registrations', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  getById: (id) => {
    const token = localStorage.getItem('adminToken');
    return api.get(`/registrations/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  create: (registrationData) => api.post('/registrations', registrationData),
  updateStatus: (id, status) => {
    const token = localStorage.getItem('adminToken');
    return api.put(`/registrations/${id}/status`, { status }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

export const alumni = {
  getAll: () => api.get('/alumni'),
  getFeatured: () => api.get('/alumni/featured'),
  getById: (id) => api.get(`/alumni/${id}`),
  create: (alumniData) => api.post('/alumni', alumniData),
  update: (id, alumniData) => api.put(`/alumni/${id}`, alumniData),
  delete: (id) => api.delete(`/alumni/${id}`),
};

// Admin API endpoints
export const admin = {
  register: (adminData) => api.post('/admin/register', adminData),
  login: (credentials) => api.post('/admin/login', credentials),
  getStudents: () => {
    const token = localStorage.getItem('adminToken');
    return api.get('/admin/students', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

export default api; 