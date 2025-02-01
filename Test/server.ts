import express, { Request, Response } from "express";
import fileManager from "./fileManager";
import path from "path";

const filePath = path.join(__dirname, "data.txt");
const app = express();
const PORT = 3000;

app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Salamm");
});

app
  .route("/file")
  .get(async (req: Request, res: Response) => {
    try {
      const data = await fileManager.readFile(filePath);
      res.send(data);
    } catch (e) {
      res.status(404).send("File not found");
    }
  })
  .post(async (req: Request, res: Response) => {
    try {
      await fileManager.writeFile(filePath, req.body);
      res.send("File updated succestfully");
    } catch (e) {
      res.status(500).send("Failed to update the file");
    }
  });

app.get("/time", (req: Request, res: Response) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(currentTime);
});

app.get("/date", (req: Request, res: Response) => {
  const currentDate = new Date().toISOString().split("T")[0];
  res.send(currentDate);
});

app.use((req: Request, res: Response) => {
  res.status(404).send("404: Endpoint not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
