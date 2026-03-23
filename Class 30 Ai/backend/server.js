import dotenv from "dotenv";
import app from "./src/app.js";
import connectDatabase from "./src/config/db.js";

// Load environment variables before starting the API.
dotenv.config();

const PORT = process.env.PORT || 5000;

try {
  // Connect to MongoDB before the server starts accepting requests.
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Failed to start the server:", error.message);
  process.exit(1);
}

