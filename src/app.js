import express from "express";
import { connectDB } from "./config/database.js";

const app = express();

app.use(express.json());

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is successfully listening on port 3000....");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!", err);
  });
