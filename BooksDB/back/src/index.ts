import express, { Request, Response, NextFunction } from "express";
import { connectDB } from "./config/db";
import { router } from "./routes/books";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/v1/books", router);

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
