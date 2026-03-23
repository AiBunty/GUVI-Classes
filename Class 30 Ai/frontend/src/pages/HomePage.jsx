import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../api/authApi.js";
import { clearAuth, getStoredAuth } from "../utils/authStorage.js";

export default function HomePage() {
  // Start with locally stored auth so the page can render immediately.
  const [auth, setAuth] = useState(() => getStoredAuth());
  const [profileError, setProfileError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      if (!auth?.token) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        const response = await fetchProfile(auth.token);

        setAuth((currentAuth) => ({
          ...currentAuth,
          user: response.user,
        }));
      } catch (error) {
        if (error.response?.status === 401) {
          clearAuth();
          navigate("/login", { replace: true });
          return;
        }

        setProfileError(
          error.response?.data?.message || "Unable to load the user profile."
        );
      }
    };

    loadProfile();
  }, [auth?.token, navigate]);

  const handleLogout = () => {
    clearAuth();
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 px-6 py-5 shadow-glow backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-tide">Home</p>
            <h1 className="mt-2 text-3xl font-bold text-white">
              Welcome, {auth?.user?.firstName || auth?.user?.username || "User"}
            </h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Logout
          </button>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-signal">
              Profile summary
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Username
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {auth?.user?.username || "--"}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Full Name
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {auth?.user
                    ? `${auth.user.firstName} ${auth.user.lastName}`
                    : "--"}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Location
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {auth?.user ? `${auth.user.city}, ${auth.user.country}` : "--"}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Age
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {auth?.user?.age || "--"}
                </p>
              </div>
            </div>
          </article>

          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-tide">
              Notes
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <li>Register redirects to login.</li>
              <li>Login stores the JWT locally and redirects to home.</li>
              <li>The backend exposes protected profile data through `/api/auth/me`.</li>
            </ul>

            {profileError ? (
              <p className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
                {profileError}
              </p>
            ) : null}
          </aside>
        </section>
      </div>
    </main>
  );
}
