const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
const namePattern = /^[a-zA-Z ]{2,30}$/;
const locationPattern = /^[a-zA-Z ]{2,30}$/;
const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export function validateRegisterForm(values) {
  const errors = {};

  if (!usernamePattern.test(String(values.username || "").trim())) {
    errors.username =
      "Username must be 3 to 20 characters and use letters, numbers, or underscores.";
  }

  if (!namePattern.test(String(values.firstName || "").trim())) {
    errors.firstName = "First name should contain at least 2 letters.";
  }

  if (!namePattern.test(String(values.lastName || "").trim())) {
    errors.lastName = "Last name should contain at least 2 letters.";
  }

  const age = Number(values.age);

  if (!Number.isInteger(age) || age < 18 || age > 100) {
    errors.age = "Age must be a whole number between 18 and 100.";
  }

  if (!locationPattern.test(String(values.city || "").trim())) {
    errors.city = "City should contain at least 2 letters.";
  }

  if (!locationPattern.test(String(values.country || "").trim())) {
    errors.country = "Country should contain at least 2 letters.";
  }

  if (!strongPasswordPattern.test(String(values.password || ""))) {
    errors.password =
      "Password must be 8+ characters with uppercase, lowercase, and a number.";
  }

  return errors;
}

export function validateLoginForm(values) {
  const errors = {};

  if (!String(values.username || "").trim()) {
    errors.username = "Username is required.";
  }

  if (!String(values.password || "").trim()) {
    errors.password = "Password is required.";
  }

  return errors;
}
