import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async function protect(request, response, next) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      response.status(401);
      throw new Error("Authorization token is missing.");
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      response.status(401);
      throw new Error("User not found for the provided token.");
    }

    request.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

