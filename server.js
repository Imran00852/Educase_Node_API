import express from "express";
import { config } from "dotenv";
import schoolRouter from "./routes/school.js";

config({
  path: "./data/config.env",
});

const app = express();

//using middlewares
app.use(express.json());

//routes
app.use("/api", schoolRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
