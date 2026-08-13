import { PortfolioData } from "../types";
import { BrandIcon } from "../icons";

interface SkillsProps {
  skills: PortfolioData["skills"];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-title">
          <span className="bullet"></span> {skills.heading}
        </div>

        {skills.categories.map((cat) => (
          <div className="stack-row" key={cat.category}>
            <div className="stack-label">{cat.category}</div>
            <div className="stack-items">
              {cat.items.map((item) => (
                <span className="pill" key={item.name}>
                  <BrandIcon name={item.icon} color={item.color} />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
