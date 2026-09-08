export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="project-card">
        <div className="project-tab-bar">
          <i className="bi bi-file-earmark-code me-1"></i>
          {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.jsx
        </div>
        <div className="project-body">
          <h5>
            {project.title}
            {project.year && (
              <span className="project-year"> ({project.year})</span>
            )}
          </h5>
          <p>{project.description}</p>

          {project.highlights && (
            <ul className="project-highlights">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-links">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right me-1"></i>Live Demo
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github me-1"></i>GitHub
              </a>
            )}
            {project.frontendCode && (
              <a
                href={project.frontendCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github me-1"></i>Frontend Repo
              </a>
            )}
            {project.backendCode && (
              <a
                href={project.backendCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github me-1"></i>Backend Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
