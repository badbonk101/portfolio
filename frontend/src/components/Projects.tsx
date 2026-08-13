import { PortfolioData } from "../types";

interface ProjectsProps {
  projects: PortfolioData["projects"];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="proj-head">
          <div className="sec-title" style={{ marginBottom: 0 }}>
            <span className="bullet"></span> {projects.heading}
          </div>
          <a href="#" className="view-all">
            {projects.viewAllLabel} →
          </a>
        </div>
        <div className="proj-grid">
          {projects.items.map((project) => (
            <div className="proj-card" key={project.title}>
              <div className="proj-thumb">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} />
                ) : (
                  project.icon
                )}
              </div>
              <div className="proj-body">
                <div className="proj-cat">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
