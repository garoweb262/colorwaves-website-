import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Type definitions
interface CreateUserData {
  email: string;
  name: string;
  password: string;
  role?: string;
}

interface UpdateUserData {
  email?: string;
  name?: string;
  role?: string;
}

interface RegisterData {
  email: string;
  name: string;
  password: string;
}

interface PartnershipRequestData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  partnershipType: string;
  description: string;
}

interface ProjectRequestData {
  clientName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  projectTitle: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  services: string[];
  website: string;
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available (for admin endpoints)
    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    } else {
      // Use static token for public endpoints
      const staticToken = process.env.NEXT_PUBLIC_STATIC_API_TOKEN;
      if (staticToken) {
        config.headers.Authorization = `Bearer ${staticToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const apiEndpoints = {
  health: () => api.get('/health'),
  users: {
    getAll: () => api.get('/users'),
    getById: (id: string) => api.get(`/users/${id}`),
    create: (data: CreateUserData) => api.post('/users', data),
    update: (id: string, data: UpdateUserData) => api.put(`/users/${id}`, data),
    delete: (id: string) => api.delete(`/users/${id}`),
  },
  auth: {
    login: (credentials: { email: string; password: string }) =>
      api.post('/auth/login', credentials),
    register: (userData: RegisterData) => api.post('/auth/register', userData),
    logout: () => api.post('/auth/logout'),
    refresh: () => api.post('/auth/refresh'),
  },
  partnershipRequests: {
    create: (data: PartnershipRequestData) => api.post('/partnership-requests', data),
  },
  projectRequests: {
    create: (data: ProjectRequestData) => api.post('/project-requests', data),
  },
};

export default api;
