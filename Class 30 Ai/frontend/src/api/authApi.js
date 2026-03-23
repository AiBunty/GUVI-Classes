import axios from "axios";

// Use the configured API URL when present, otherwise fall back to local development.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export async function registerUser(payload) {
  const response = await api.post("/auth/register", payload);
  return response.data;
}

export async function loginUser(payload) {
  const response = await api.post("/auth/login", payload);
  return response.data;
}

export async function fetchProfile(token) {
  const response = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

