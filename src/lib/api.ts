import axios, { AxiosInstance, AxiosResponse } from 'axios';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9004/api/v1';
const STATIC_TOKEN = process.env.NEXT_PUBLIC_STATIC_API_TOKEN;

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add static token for public APIs
api.interceptors.request.use(
  (config) => {
    // For corporate website, we use static token for all public API calls
    if (STATIC_TOKEN) {
      config.headers['Authorization'] = `Bearer ${STATIC_TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized: Invalid or missing static token');
    }
    return Promise.reject(error);
  }
);

// Newsletter API
export const newsletterAPI = {
  subscribe: async (email: string): Promise<{ success: boolean; data: unknown; message?: string }> => {
    try {
      const response = await api.post('/newsletter/subscribe', { email });
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to subscribe');
    }
  },

  unsubscribe: async (email: string): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await api.post('/newsletter/unsubscribe', { email });
      return { success: true, message: response.data.message };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to unsubscribe');
    }
  },
};

// Contact Messages API (Public)
export const contactAPI = {
  submitMessage: async (data: {
    fullName: string;
    email: string;
    phoneNumber?: string;
    subject: string;
    message: string;
  }): Promise<{ success: boolean; data: unknown }> => {
    try {
      // Transform field names to match backend DTO
      const payload = {
        name: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        subject: data.subject,
        message: data.message,
      };
      const response = await api.post('/contacts', payload);
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to send message');
    }
  },
};

// Project Requests API (Public with Static Token)
export const projectRequestsAPI = {
  create: async (data: {
    fullName: string;
    email: string;
    phoneNumber: string;
    companyName?: string;
    projectTitle: string;
    projectDescription: string;
    budget?: string;
    timeline?: string;
    servicesNeeded?: string[];
    imageUrls?: string[];
  }): Promise<{ success: boolean; data: unknown }> => {
    try {
      // Transform field names to match backend DTO
      const payload = {
        clientName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        companyName: data.companyName,
        projectTitle: data.projectTitle,
        projectDescription: data.projectDescription,
        budget: data.budget || "Not specified",
        timeline: data.timeline || "Flexible",
        services: data.servicesNeeded || [],
        images: data.imageUrls || [],
      };
      const response = await api.post('/project-requests', payload);
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to submit project request');
    }
  },
};

// Partnership Requests API (Public with Static Token)
export const partnershipRequestsAPI = {
  create: async (data: {
    fullName: string;
    companyName: string;
    contactPerson: string;
    email: string;
    phoneNumber: string;
    partnershipType: string;
    description: string;
    website?: string;
    companySize: string;
    industry: string;
  }): Promise<{ success: boolean; data: unknown }> => {
    try {
      const response = await api.post('/partnership-requests', data);
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to submit partnership request');
    }
  },
};

// File Upload API
export const uploadAPI = {
  uploadImage: async (image: File, folder?: string): Promise<{
    success: boolean;
    data: {
      originalName: string;
      fileName: string;
      fileUrl: string;
      size: number;
      mimeType: string;
    };
  }> => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      if (folder) {
        formData.append('folder', folder);
      }

      const response = await api.post('/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // The backend returns data directly, wrap it for consistency
      return { success: true, data: response.data.data || response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to upload image');
    }
  },

  uploadImages: async (images: File[], folder?: string): Promise<{
    success: boolean;
    data: Array<{
      originalName: string;
      fileName: string;
      fileUrl: string;
      size: number;
      mimeType: string;
    }>;
  }> => {
    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append('images', image);
      });
      if (folder) {
        formData.append('folder', folder);
      }

      const response = await api.post('/upload/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // The backend returns data directly, wrap it for consistency
      return { success: true, data: response.data.data || response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to upload images');
    }
  },
};

// Export the axios instance for custom requests
export default api;
