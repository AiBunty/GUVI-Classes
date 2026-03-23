import { Navigate } from "react-router-dom";
import { getStoredAuth } from "../utils/authStorage.js";

export default function ProtectedRoute({ children }) {
  // Redirect visitors to the login page when no token is stored.
  if (!getStoredAuth()?.token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

