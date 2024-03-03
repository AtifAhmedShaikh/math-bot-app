import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import process from "node:process";
import dotenv from "dotenv";
import evaluationRouter from "./routes/evaluator.routes.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
dotenv.config({
  path: "src/config/config.env",
});

const app = express();

// cors configuration
const corsOptions = {
  origin: process.env.FRONTEND_ORIGIN,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// configure express app middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// declare index route of server
app.get("/", (_, res) => {
  res.status(200).json({ message: "Welcome to Math Bot Application 🚀" });
});

// declare routes
app.use("/api/arithmetic-operations", evaluationRouter);

// handle 404 not found route
app.use((req, res) => {
  res.status(404).json({ message: "route not found " });
});

// Global error handling middleware
app.use(errorHandler);

export { app };
