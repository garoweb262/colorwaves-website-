import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface ApiError extends Error {
  status?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9004/api/v1";
const STATIC_TOKEN = process.env.NEXT_PUBLIC_STATIC_API_TOKEN|| "";

export async function fetchJson<T>(path: string, init: RequestInit = {}): Promise<{ data: T | null; status: number }> {
  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(STATIC_TOKEN ? { Authorization: `Bearer ${STATIC_TOKEN}` } : {}),
    ...(init.headers || {}),
  };

  const res = await fetch(url, { ...init, headers, cache: "no-store" });
  const status = res.status;

  if (status === 204) return { data: null, status };
  if (status === 404) return { data: null, status };

  try {
    const data = (await res.json()) as T;
    return { data, status };
  } catch {
    return { data: null, status };
  }
}

export function isEmptyArray(value: unknown): value is unknown[] {
  return Array.isArray(value) && value.length === 0;
}

// Axios instance (shares same base URL and token)

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

// Blog API (Public with Static Token)
export const blogAPI = {
  // Get all published blogs
  getAll: async (): Promise<{ success: boolean; data: Blog[] }> => {
    try {
      const response = await api.get('/blogs/public');
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to fetch blogs');
    }
  },

  // Get blog by slug
  getBySlug: async (slug: string): Promise<{ success: boolean; data: Blog }> => {
    try {
      const response = await api.get(`/blogs/slug/${slug}`);
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to fetch blog');
    }
  },

  // Get featured blogs
  getFeatured: async (): Promise<{ success: boolean; data: Blog[] }> => {
    try {
      const response = await api.get('/blogs/featured');
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to fetch featured blogs');
    }
  },

  // Get popular blogs
  getPopular: async (): Promise<{ success: boolean; data: Blog[] }> => {
    try {
      const response = await api.get('/blogs/popular');
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to fetch popular blogs');
    }
  },

  // Get blogs by category
  getByCategory: async (category: string): Promise<{ success: boolean; data: Blog[] }> => {
    try {
      const response = await api.get(`/blogs/category/${encodeURIComponent(category)}`);
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to fetch blogs by category');
    }
  },

  // Get blogs by tag
  getByTag: async (tag: string): Promise<{ success: boolean; data: Blog[] }> => {
    try {
      const response = await api.get(`/blogs/tag/${encodeURIComponent(tag)}`);
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to fetch blogs by tag');
    }
  },

  // Increment view count
  incrementViewCount: async (slug: string): Promise<{ success: boolean; data: Blog }> => {
    try {
      const response = await api.get(`/blogs/slug/${slug}/view`);
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to increment view count');
    }
  },

  // Increment like count
  incrementLikeCount: async (slug: string): Promise<{ success: boolean; data: Blog }> => {
    try {
      const response = await api.get(`/blogs/slug/${slug}/like`);
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to increment like count');
    }
  },
};

// Partners API (Public with Static Token)
export const partnersAPI = {
  // Get all active partners
  getAll: async (): Promise<{ success: boolean; data: Partner[] }> => {
    try {
      const response = await api.get('/partners');
      return { success: true, data: response.data };
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(err.response?.data?.message || 'Failed to fetch partners');
    }
  },
};

// Partner Type Definition
export interface Partner {
  _id: string;
  name: string;
  status: 'active' | 'inactive';
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

// Blog Type Definition
export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  images: string[];
  tags: string[];
  categories: string[];
  status: 'draft' | 'published' | 'archived';
  author: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  imageUrl: string;
  videoUrl?: string;
}

// Export the axios instance for custom requests
export default api;
