export interface NavLink {
  label: string;
  href: string;
  active: boolean;
}

export interface ActionLink {
  label: string;
  icon: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface InfoItem {
  icon: string;
  label: string;
}

export interface StatItem {
  icon: string;
  number: string;
  label: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectItem {
  category: string;
  icon: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface PortfolioData {
  site: {
    title: string;
    logoTag: string;
    logoText: string;
  };
  nav: NavLink[];
  headerCta: ActionLink;
  hero: {
    greetingIcon: string;
    greetingText: string;
    firstName: string;
    lastName: string;
    role: string;
    roleAccent: string;
    description: string;
    primaryCta: ActionLink;
    secondaryCta: ActionLink;
    socials: SocialLink[];
    avatarInitials: string;
    avatarImageUrl: string;
    floatingBadges: string[];
  };
  about: {
    heading: string;
    paragraph: string;
    infoItems: InfoItem[];
    stats: StatItem[];
  };
  skills: {
    heading: string;
    categories: SkillCategory[];
  };
  projects: {
    heading: string;
    viewAllLabel: string;
    items: ProjectItem[];
  };
  footer: {
    text: string;
  };
}
