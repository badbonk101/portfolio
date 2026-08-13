import { PortfolioData } from "./types";

const API_BASE = import.meta.env.VITE_API_BASE ?? "";

export async function fetchPortfolio(): Promise<PortfolioData> {
  const res = await fetch(`${API_BASE}/api/portfolio`);
  if (!res.ok) {
    throw new Error(`Failed to load portfolio data: ${res.status}`);
  }
  return res.json();
}
