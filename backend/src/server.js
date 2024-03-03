import dotenv from "dotenv";
import { connectMongoDB } from "./database/connection.js";
import { app } from "./app.js";
import process from "node:process";

dotenv.config({
  path: "src/config/config.env",
});

const PORT = process.env.PORT || 5000;

connectMongoDB();

app.listen(PORT, () => {
  console.log("Server running at port :", PORT);
});

process.on("unhandledRejection", error => {
  console.log("Promise rejected ", error);
});

process.on("uncaughtException", (error, source) => {
  console.log(error, source);
});
