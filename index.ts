import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { sampleProducts } from "./utils/sampleProduct";

//For env File
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.get("/api/products", (req: Request, res: Response) => {
  res.send(sampleProducts);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
