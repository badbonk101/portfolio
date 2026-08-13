import { PortfolioData } from "../types";

interface FooterProps {
  footer: PortfolioData["footer"];
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer>
      <div className="wrap">{footer.text}</div>
    </footer>
  );
}
