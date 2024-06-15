import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import recipesRoutes from "./routes/recipes.routes.js";

// load env variables
dotenv.config({ path: [".env.local"] });

// create an express app
const app = express();

// apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// app.use(express.static("uploads"));

// use routes
// app.use(recipesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// make database connection
await mongoose.connect(process.env.MONGO_URI);

// get the app to listen on port 4000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Express app is running on port: ${port}`);
});
