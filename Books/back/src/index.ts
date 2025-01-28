import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { router } from "./routes/books";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/books", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
