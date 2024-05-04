import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import connectDB from "./config/dbConfig";
import productsRoute from "./routes/proudctRoute";

//For env File
dotenv.config();

// DB connect
connectDB();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use("/api/products", productsRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
