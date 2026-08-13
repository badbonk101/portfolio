import { useEffect, useState } from "react";
import { fetchPortfolio } from "./api";
import { PortfolioData } from "./types";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPortfolio()
      .then(setData)
      .catch((err) => setError(err instanceof Error ? err.message : "Unknown error"));
  }, []);

  if (error) {
    return <div className="state-message">Failed to load portfolio data: {error}</div>;
  }

  if (!data) {
    return <div className="state-message">Loading…</div>;
  }

  document.title = data.site.title;

  return (
    <>
      <Header site={data.site} nav={data.nav} headerCta={data.headerCta} />
      <main>
        <Hero hero={data.hero} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
      </main>
      <Footer footer={data.footer} />
    </>
  );
}
