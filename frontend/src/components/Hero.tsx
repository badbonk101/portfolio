import { PortfolioData } from "../types";

interface HeroProps {
  hero: PortfolioData["hero"];
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="badge-hi">
            {hero.greetingIcon} {hero.greetingText}
          </div>
          <h1>
            {hero.firstName}
            <br />
            <span className="accent">{hero.lastName}</span>
          </h1>
          <div className="role">
            {hero.role} <span className="accent">{hero.roleAccent}</span>
          </div>
          <p className="desc">{hero.description}</p>
          <div className="hero-cta">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label} {hero.primaryCta.icon}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-outline">
              {hero.secondaryCta.label} {hero.secondaryCta.icon}
            </a>
          </div>
          <div className="socials">
            {hero.socials.map((social) => (
              <a key={social.label} href={social.href} title={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="blob"></div>
          <div className="avatar">
            {hero.avatarImageUrl ? (
              <img src={hero.avatarImageUrl} alt={`${hero.firstName} ${hero.lastName}`} />
            ) : (
              hero.avatarInitials
            )}
          </div>
          {hero.floatingBadges.map((badge, index) => (
            <div key={badge + index} className={`float-badge fb-${index + 1}`}>
              {badge}
            </div>
          ))}
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>
    </section>
  );
}
