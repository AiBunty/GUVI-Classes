import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

function buildSafeUser(user) {
  return {
    id: user._id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    city: user.city,
    country: user.country,
  };
}

export async function registerUser(request, response, next) {
  try {
    const { username, firstName, lastName, age, city, country, password } =
      request.body;

    // Ensure all required fields exist before doing database work.
    if (
      !username ||
      !firstName ||
      !lastName ||
      !age ||
      !city ||
      !country ||
      !password
    ) {
      response.status(400);
      throw new Error("All fields are required.");
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      response.status(409);
      throw new Error("Username already exists.");
    }

    // Hash the password so it is never stored as plain text.
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      firstName,
      lastName,
      age,
      city,
      country,
      password: hashedPassword,
    });

    response.status(201).json({
      message: "Registration successful.",
      user: buildSafeUser(user),
    });
  } catch (error) {
    next(error);
  }
}

export async function loginUser(request, response, next) {
  try {
    const { username, password } = request.body;

    if (!username || !password) {
      response.status(400);
      throw new Error("Username and password are required.");
    }

    // Fetch the user with the hashed password for credential comparison.
    const user = await User.findOne({ username });

    if (!user) {
      response.status(401);
      throw new Error("Invalid username or password.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      response.status(401);
      throw new Error("Invalid username or password.");
    }

    response.json({
      message: "Login successful.",
      token: generateToken(user._id),
      user: buildSafeUser(user),
    });
  } catch (error) {
    next(error);
  }
}

export async function getProfile(request, response, next) {
  try {
    response.json({
      user: buildSafeUser(request.user),
    });
  } catch (error) {
    next(error);
  }
}

