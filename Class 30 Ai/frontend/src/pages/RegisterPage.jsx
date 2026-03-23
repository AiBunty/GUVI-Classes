import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput.jsx";
import { registerUser } from "../api/authApi.js";
import { validateRegisterForm } from "../utils/validators.js";

const requiredFields = [
  "username",
  "firstName",
  "lastName",
  "age",
  "city",
  "country",
  "password",
];

export default function RegisterPage() {
  // The form reference lets us read input values from the DOM on demand.
  const formRef = useRef(null);
  const navigate = useNavigate();

  // This state only tracks UI feedback, not the input values themselves.
  const [errors, setErrors] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const updateValidationState = () => {
    const formElement = formRef.current;

    if (!formElement) {
      return;
    }

    // Convert uncontrolled form values into a plain object for validation.
    const formValues = Object.fromEntries(new FormData(formElement).entries());
    const nextErrors = validateRegisterForm(formValues);
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
    const nextErrors = validateRegisterForm(formValues);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setServerError("");

    try {
      await registerUser({
        ...formValues,
        age: Number(formValues.age),
      });

      navigate("/login", {
        replace: true,
        state: {
          message: "Registration completed. Please log in with your credentials.",
        },
      });
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-glow backdrop-blur md:grid-cols-[1.05fr_0.95fr]">
        <div className="hidden min-h-full flex-col justify-between bg-ink p-10 md:flex">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-tide">
              MERN Stack
            </p>
            <h1 className="max-w-md text-4xl font-bold leading-tight text-white">
              Build a responsive auth flow with React, Tailwind, Express, MongoDB,
              JWT, and bcrypt.
            </h1>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Register here first. After a successful signup, the app redirects you
              to the login page as requested in the prompt.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-mist">Included user fields</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Username, first name, last name, age, city, country, and password.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="mx-auto w-full max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-signal">
              Create account
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">Register</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              This form is uncontrolled, responsive, and validates the data before
              enabling submission.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              onInput={updateValidationState}
              className="mt-8 space-y-5"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                  label="Username"
                  name="username"
                  placeholder="e.g. arun_07"
                  error={errors.username}
                />
                <FormInput
                  label="Age"
                  name="age"
                  type="number"
                  placeholder="18"
                  error={errors.age}
                  inputProps={{ min: 18, max: 100 }}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                  label="First Name"
                  name="firstName"
                  placeholder="First name"
                  error={errors.firstName}
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Last name"
                  error={errors.lastName}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                  label="City"
                  name="city"
                  placeholder="City"
                  error={errors.city}
                />
                <FormInput
                  label="Country"
                  name="country"
                  placeholder="Country"
                  error={errors.country}
                />
              </div>

              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="Minimum 8 characters"
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
                className="w-full rounded-2xl bg-signal px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-sm text-slate-300">
              Already registered?{" "}
              <Link className="font-semibold text-tide" to="/login">
                Go to login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

