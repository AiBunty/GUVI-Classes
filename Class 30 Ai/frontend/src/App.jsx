import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { getStoredAuth } from "./utils/authStorage.js";

export default function App() {
  // Read local auth once on render to choose the default landing page.
  const auth = getStoredAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={auth?.token ? "/home" : "/login"} replace />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
