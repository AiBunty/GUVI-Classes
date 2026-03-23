import cors from "cors";
import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middlewares/errorMiddleware.js";

const app = express();

// Allow the frontend application to call the backend during development.
app.use(
  cors({
    origin(origin, callback) {
      const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

      if (!origin || origin === clientUrl) {
        callback(null, true);
        return;
      }

      callback(new Error("CORS is blocking this origin."));
    },
    credentials: true,
  })
);

// Parse incoming JSON request bodies.
app.use(express.json());

// Log requests for faster debugging while developing.
app.use(morgan("dev"));

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

// Mount authentication routes under a single API prefix.
app.use("/api/auth", authRoutes);

// Handle unknown routes and application errors consistently.
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
