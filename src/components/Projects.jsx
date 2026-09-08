const projects = [
  {
    title: "Kavin Villa",
    category: "Residential Architecture",
    image: "/k7-design-studio-Website/images/kavin-villa.png",
    slug: "kavin-villa"
  },
  {
    title: "Interior Living Space",
    category: "Interior Design",
    image: "/k7-design-studio-Website/images/interior-living.png",
    slug: "interior-living-space"
  },
  {
    title: "Contemporary Dining",
    category: "Interior Design",
    image: "/k7-design-studio-Website/images/dining-interior.png",
    slug: "contemporary-dining"
  }
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="eyebrow">SELECTED VISUALS</p>
            <h2>Designed For<br />Real Life.</h2>
          </div>
          <p className="projects-intro">
            A glimpse into the architectural and interior language presented in the K7 Design Studio company profile.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.title}>
              <a href="#projects-all" className="project-image project-link" aria-label={`View details for ${project.title}`}>
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-more">More Details ↗</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
