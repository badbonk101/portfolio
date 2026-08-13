import { PortfolioData } from "../types";

interface HeaderProps {
  site: PortfolioData["site"];
  nav: PortfolioData["nav"];
  headerCta: PortfolioData["headerCta"];
}

export function Header({ site, nav, headerCta }: HeaderProps) {
  return (
    <header>
      <div className="wrap nav">
        <div className="logo">
          <span className="tag">{site.logoTag}</span> {site.logoText}
        </div>
        <nav className="navlinks">
          {nav.map((link) => (
            <a key={link.label} href={link.href} className={link.active ? "active" : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href={headerCta.href} className="cv-btn">
          {headerCta.label} {headerCta.icon}
        </a>
      </div>
    </header>
  );
}
