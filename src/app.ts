import express, { type Request, type Response } from "express";
import notFound from "./utility/notFound";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import { authRoutes } from "./modules/auth/auth.routes";
import cookieParser from "cookie-parser";
import cors from "cors";
import { issueRoutes } from "./modules/issues/issues.route";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  }),
);

app.use(cookieParser());

app.use(express.json());
app.use(express.text());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message:
      "🚀 Welcome to DevPulse API - Internal Tech Issue & Feature Tracker",
    author: "Md Shoaib",
    status: "Server is running successfully ✅",
    endpoints: {
      auth: "/api/auth",
      issues: "/api/issues",
      health: "/health",
    },
    timestamp: new Date().toISOString(),
  });
});

// Health Check Route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "🟢 DevPulse Server is Healthy and Running Successfully",
    author: "Md Shoaib",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/issues", issueRoutes);

// Not Found Middleware
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;