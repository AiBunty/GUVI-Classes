const AUTH_STORAGE_KEY = "mern-auth";

export function getStoredAuth() {
  const rawAuth = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!rawAuth) {
    return null;
  }

  try {
    return JSON.parse(rawAuth);
  } catch (error) {
    clearAuth();
    return null;
  }
}

export function saveAuth(authData) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
}

export function clearAuth() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

