import express from "express"; // it give me warning
// const express = require('express');
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/noteRoutes.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

// this is middleware basicallt parse the json bodies : req.body
app.use(express.json());

// simple custom middleware
// app.use((req, res, next) => {
//   console.log(`req method is ${req.method} & req URL is ${req.url} `);
//   next();
// });

app.use(ratelimiter);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("app runnig on port ", PORT);
  });
});
