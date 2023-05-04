import mongoose from "mongoose";
import { config } from "dotenv";

if (process.env.NODE_ENV !== "PRODUCTION") {
  config({ path: "./config/config.env" });
  console.log(
    "\x1b[35m",
    "👉👉👉 process.env.MONGO_URL :",
    process.env.MONGO_URL
  );
}

const connectDB = async (callBackAfterDatabaseConnection) => {
  try {
    const data = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      "\x1b[36m",
      "👍👍👍",
      `Connected to database by : ${data.connection.host} 🎉🎉🎉 `
    );

    callBackAfterDatabaseConnection(data);
  } catch (err) {
    console.error("\x1b[31m", " 👎👎👎 :", "No connection closing server", err);
    process.exit(1);
  }
};

export default connectDB;
