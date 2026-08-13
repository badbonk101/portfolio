import express from "express";
import cors from "cors";
import path from "path";
import { portfolioData } from "./data";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use("/images", express.static(path.join(__dirname, "..", "public", "images")));

app.get("/api/portfolio", (_req, res) => {
  res.json(portfolioData);
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend API listening on http://localhost:${PORT}`);
});
