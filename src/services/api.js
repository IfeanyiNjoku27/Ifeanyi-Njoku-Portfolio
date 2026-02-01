import axios from "axios";

const API_URL = import.meta.env.PROD
    ? 'https://assignment-2-backend-portfolio.onrender.com/api'
    : import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Helper function to check if the JWT is expired
const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp * 1000; // Convert to milliseconds
    return Date.now() > expiry;
  } catch (e) {
    return true; // If it can't be parsed, assume it's invalid
  }
};

// REQUEST INTERCEPTOR 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    if (isTokenExpired(token)) {
      // Token is dead. Clean it up and send request as "Public"
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Do NOT attach the header
    } else {
      // Token is valid. Attach it.
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// RESPONSE INTERCEPTOR 
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Double safety: If backend still returns 401, clean up
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Optional: Refresh the page so the UI updates to "Logged Out" mode immediately
      window.location.reload(); 
    }
    return Promise.reject(error);
  }
);

export default api;