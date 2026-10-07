import SectionHeader from "./SectionHeader";

export default function Projects({ items }) {
  return (
    <section className="section shell" id="projects">
      <SectionHeader
        eyebrow="Key Projects"
        title="Ideas turned into working products."
        intro="From vehicle booking and travel to enterprise workflows—explore the platforms, features, and engineering behind my work."
      />

      <div className="project-grid">
        {items.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            {project.details.some(detail => detail !== project.summary) && <ul className="project-details">
              {project.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>}
            <div className="pill-list compact">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
