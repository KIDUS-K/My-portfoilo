import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && (
              <img src={project.image} alt={project.title} className="project-img" />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool-tag">{tool}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;