import app from "./app.js";
import connectDB from "./database.js";
import { config } from "dotenv";

let server = null; // updated later

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  config({ path: "./config/config.env" });
}

connectDB((data) => {
  server = app.listen(process.env.PORT, () => {
    console.log(
      "\x1b[36m",
      "👍👍👍",
      `SERVER STARTED ON PORT : ${process.env.PORT} 🥳🥳🥳`
    );
  });
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server?.close(() => {
    process.exit(1);
  });
});
