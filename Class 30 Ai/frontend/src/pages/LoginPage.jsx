import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput.jsx";
import { loginUser } from "../api/authApi.js";
import { saveAuth } from "../utils/authStorage.js";
import { validateLoginForm } from "../utils/validators.js";

const requiredFields = ["username", "password"];

export default function LoginPage() {
  // Read the form through a DOM reference to keep it uncontrolled.
  const formRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // The page only stores UI status, not the actual field values.
  const [errors, setErrors] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const updateValidationState = () => {
    const formElement = formRef.current;

    if (!formElement) {
      return;
    }

    const formValues = Object.fromEntries(new FormData(formElement).entries());
    const nextErrors = validateLoginForm(formValues);
    const isFilled = requiredFields.every((field) =>
      String(formValues[field] || "").trim()
    );

    setErrors(nextErrors);
    setCanSubmit(isFilled && Object.keys(nextErrors).length === 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElement = formRef.current;

    if (!formElement) {
      return;
    }

    const formValues = Object.fromEntries(new FormData(formElement).entries());
    const nextErrors = validateLoginForm(formValues);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setServerError("");

    try {
      const authData = await loginUser(formValues);

      saveAuth(authData);
      navigate("/home", { replace: true });
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Login failed. Check your credentials."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60 shadow-glow backdrop-blur md:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 flex items-center bg-gradient-to-br from-ink to-slate-900 p-8 md:order-1 md:p-10">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-signal">
              Responsive login
            </p>
            <h1 className="text-4xl font-bold text-white">
              Uncontrolled form with validation and gated submit button.
            </h1>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              The submit button stays disabled until the required fields are filled
              and validated. Successful login redirects to the home page.
            </p>
          </div>
        </div>

        <div className="order-1 p-6 sm:p-10 md:order-2">
          <div className="mx-auto max-w-md">
            <p className="text-sm uppercase tracking-[0.2em] text-tide">
              Welcome back
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">Login</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Use the username and password you created during registration.
            </p>

            {location.state?.message ? (
              <p className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                {location.state.message}
              </p>
            ) : null}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              onInput={updateValidationState}
              className="mt-8 space-y-5"
              noValidate
            >
              <FormInput
                label="Username"
                name="username"
                placeholder="Enter your username"
                error={errors.username}
              />

              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                error={errors.password}
              />

              {serverError ? (
                <p className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  {serverError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="w-full rounded-2xl bg-tide px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
              >
                {isSubmitting ? "Signing in..." : "Login"}
              </button>
            </form>

            <p className="mt-6 text-sm text-slate-300">
              New user?{" "}
              <Link className="font-semibold text-signal" to="/register">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

