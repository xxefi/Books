import { promises as fs } from "fs";

async function readFile(filePath: string): Promise<string> {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (error) {
    throw new Error("File not found");
  }
}

async function writeFile(filePath: string, content: string): Promise<void> {
  try {
    await fs.writeFile(filePath, content, "utf8");
  } catch (error) {
    throw new Error("Failed to write to file");
  }
}

export default { readFile, writeFile };
