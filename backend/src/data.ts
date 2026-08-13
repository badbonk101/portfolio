import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  site: {
    title: "Kantapong.s — Fullstack Developer",
    logoTag: "</>",
    logoText: "Kantapong.s",
  },
  nav: [
    { label: "Home", href: "#", active: true },
    { label: "About", href: "#about", active: false },
    { label: "Skills", href: "#skills", active: false },
    { label: "Projects", href: "#projects", active: false },
    { label: "Experience", href: "#experience", active: false },
    { label: "Contact", href: "#contact", active: false },
  ],
  headerCta: { label: "Download CV", icon: "⬇", href: "#" },
  hero: {
    greetingIcon: "👋",
    greetingText: "Hi, I'm",
    firstName: "Kantapong",
    lastName: "Surimueng",
    role: "Fullstack",
    roleAccent: "Developer",
    description:
      "I build scalable web applications and robust backend systems with modern technologies. Passionate about clean code, performance, and great user experiences.",
    primaryCta: { label: "View My Work", icon: "→", href: "#projects" },
    secondaryCta: { label: "Contact Me", icon: "✉", href: "#contact" },
    socials: [
      { icon: "GH", label: "GitHub", href: "#" },
      { icon: "in", label: "LinkedIn", href: "#" },
      { icon: "FB", label: "Facebook", href: "#" },
    ],
    avatarInitials: "KS",
    avatarImageUrl: "/images/avatar.png",
    floatingBadges: ["</>", "{ }", ">_"],
  },
  about: {
    heading: "About Me",
    paragraph:
      "Full-Stack Developer with hands-on experience building web applications and backend systems using Vue.js, React, Node.js, and Golang. Experienced in designing RESTful APIs, implementing JWT authentication, role-based access control, and real-time chatbot integrations.",
    infoItems: [
      { icon: "📍", label: "Tak, Thailand" },
      { icon: "✉️", label: "plome11170@gmail.com" },
      { icon: "📞", label: "088-1567012" },
      { icon: "🛡️", label: "Military Status: Completed" },
    ],
    stats: [
      { icon: "💼", number: "2+", label: "Years Experience" },
      { icon: "🗂️", number: "15+", label: "Projects Completed" },
      { icon: "🧩", number: "5+", label: "Technologies Mastered" },
      { icon: "🎯", number: "100%", label: "Commitment" },
    ],
  },
  skills: {
    heading: "Tech Stack",
    categories: [
      {
        category: "Frontend",
        items: [
          { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
          { name: "CSS3", icon: "FaCss3Alt", color: "#1572B6" },
          { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
          { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
          { name: "React", icon: "SiReact", color: "#61DAFB" },
          { name: "Angular", icon: "SiAngular", color: "#DD0031" },
          { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38BDF8" },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "Express.js", icon: "SiExpress", color: "#3A2A1E" },
          { name: "NestJS", icon: "SiNestjs", color: "#E0234E" },
          { name: "Spring Boot", icon: "SiSpringboot", color: "#6DB33F" },
        ],
      },
      {
        category: "Database",
        items: [
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Oracle", icon: "TbDatabase", color: "#F80000" },
        ],
      },
      {
        category: "Tools & Others",
        items: [
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "AWS", icon: "FaAws", color: "#FF9900" },
          { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
          { name: "Insomnia", icon: "SiInsomnia", color: "#4000BF" },
          { name: "Trello", icon: "SiTrello", color: "#0052CC" },
          { name: "Jenkins (CI/CD)", icon: "SiJenkins", color: "#D24939" },
          { name: "Vercel", icon: "SiVercel", color: "#000000" },
        ],
      },
    ],
  },
  projects: {
    heading: "Featured Projects",
    viewAllLabel: "View All Projects",
    items: [
      {
        category: "Internal System",
        icon: "🗂️",
        imageUrl: "/images/project-1.png",
        title: "Leave Management & Timesheet System",
        description:
          "Internal system to manage leave requests and timesheets with approval workflow.",
        tags: ["Nuxt.js", "Golang", "MySQL"],
        link: "#",
      },
      {
        category: "Chatbot Integration",
        icon: "💬",
        imageUrl: "/images/project-2.png",
        title: "LINE & Slack Chatbot Integration",
        description:
          "Real-time system notifications with interactive approval actions via LINE and Slack.",
        tags: ["Golang", "Webhook", "MySQL"],
        link: "#",
      },
      {
        category: "E-commerce System",
        icon: "⚙️",
        imageUrl: "/images/project-3.png",
        title: "IGG Thrift Shop",
        description:
          "Designed and implemented an e-commerce payment system using Stripe API.",
        tags: ["Nuxt.js", "Node.js", "MongoDB"],
        link: "#",
      },
    ],
  },
  footer: {
    text: "© 2026 Kantapong Surimueng — Fullstack Developer",
  },
};
