import { PortfolioData } from "../types";

interface AboutProps {
  about: PortfolioData["about"];
}

export function About({ about }: AboutProps) {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-title">
          <span className="bullet"></span> {about.heading}
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>{about.paragraph}</p>
            {about.infoItems.map((item) => (
              <div className="info-row" key={item.label}>
                <span className="ic">{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
          <div className="stats-grid">
            {about.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="ic">{stat.icon}</div>
                <div className="stat-num">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
