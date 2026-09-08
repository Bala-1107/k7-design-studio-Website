import { useEffect } from "react";

const services = [
  {
    slug: "architectural-services",
    number: "01",
    title: "Architectural Services",
    category: "Architecture · Planning · Documentation",
    image: "/images/architecture.png",
    description: "From early planning to coordinated construction drawings, K7 Design Studio develops architectural solutions that balance site conditions, function, aesthetics and practical execution.",
    details: [
      "2D & 3D plan layouts",
      "Floor plans and elevations",
      "Structural drawing coordination",
      "Electrical and plumbing drawing coordination",
      "Design development and documentation"
    ]
  },
  {
    slug: "3d-visualization",
    number: "02",
    title: "3D Visualization",
    category: "Visualization · Interiors · Walkthroughs",
    image: "/images/dining-interior.png",
    description: "We turn design intent into clear visual experiences so clients can understand materials, proportions, lighting and atmosphere before execution begins.",
    details: [
      "Photorealistic interior visualization",
      "Exterior and architectural renders",
      "Material and lighting studies",
      "Walkthrough visualization",
      "Design presentation support"
    ]
  },
  {
    slug: "interior-execution-pmc",
    number: "03",
    title: "Interior Execution & PMC",
    category: "Interiors · Execution · Coordination",
    image: "/images/interior-living.png",
    description: "Approved concepts are carried into the real space through coordinated execution, detailing, vendor management and project monitoring.",
    details: [
      "Interior execution planning",
      "Site and vendor coordination",
      "Material and finish coordination",
      "Project monitoring",
      "Execution quality and detailing"
    ]
  },
  {
    slug: "landscape-design-execution",
    number: "04",
    title: "Landscape Design & Execution",
    category: "Landscape · Outdoor Spaces · Execution",
    image: "/images/kavin-villa.png",
    description: "Landscape concepts are developed as an extension of the architecture, creating outdoor spaces that complement the building and its everyday use.",
    details: [
      "Landscape planning and concepts",
      "Planting and outdoor composition",
      "Hardscape coordination",
      "Lighting and feature planning",
      "Landscape execution coordination"
    ]
  }
];

const projects = [
  {
    slug: "kavin-villa",
    title: "Kavin Villa",
    category: "Residential Architecture",
    location: "Chennai, Tamil Nadu",
    year: "Featured Project",
    image: "/images/kavin-villa.png",
    description: "A contemporary residential design developed around clean volumes, warm lighting and a layered relationship between the home, landscape and street frontage.",
    scope: "Architectural planning · Exterior design · 3D visualization · Interior coordination",
    gallery: ["/images/kavin-villa.png", "/images/architecture.png", "/images/interior-living.png"]
  },
  {
    slug: "interior-living-space",
    title: "Interior Living Space",
    category: "Interior Design",
    location: "Chennai, Tamil Nadu",
    year: "Featured Interior",
    image: "/images/interior-living.png",
    description: "A warm contemporary interior language using timber textures, natural light and restrained material contrasts to create a calm everyday living environment.",
    scope: "Interior concept · Material palette · 3D visualization · Design detailing",
    gallery: ["/images/interior-living.png", "/images/dining-interior.png", "/images/kavin-villa.png"]
  },
  {
    slug: "contemporary-dining",
    title: "Contemporary Dining",
    category: "Interior Design",
    location: "Chennai, Tamil Nadu",
    year: "Featured Interior",
    image: "/images/dining-interior.png",
    description: "A refined dining environment built around warm vertical timber, atmospheric lighting and a dark material palette for a more intimate character.",
    scope: "Interior concept · Lighting direction · Material coordination · Visualization",
    gallery: ["/images/dining-interior.png", "/images/interior-living.png", "/images/architecture.png"]
  }
];

function BackLink({ href = "#services" }) {
  return <a className="detail-back" href={href}>← Back to studio</a>;
}

export function ServiceDetail({ service }) {
  useEffect(() => window.scrollTo(0, 0), [service.slug]);

  return (
    <main className="detail-page service-detail-page">
      <section className="detail-hero">
        <div className="detail-hero-image"><img src={service.image} alt={service.title} /></div>
        <div className="detail-hero-copy">
          <BackLink href="#services" />
          <p className="eyebrow">SERVICE {service.number}</p>
          <h1>{service.title}</h1>
          <p className="detail-kicker">{service.category}</p>
          <p className="detail-lead">{service.description}</p>
          <a className="detail-cta" href="#contact">Discuss this service →</a>
        </div>
      </section>

      <section className="detail-body section">
        <div className="container detail-content-grid">
          <div>
            <p className="eyebrow">WHAT WE DELIVER</p>
            <h2>A clear process from idea to execution.</h2>
          </div>
          <div>
            <p className="detail-copy">Our approach is collaborative and practical. The exact scope is shaped around the project, site and client requirements.</p>
            <ul className="detail-list">
              {service.details.map((item) => <li key={item}>{item}<span>+</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="detail-cta-band">
        <div className="container detail-cta-inner">
          <div><p className="eyebrow">READY TO START?</p><h2>Let's shape the right scope for your project.</h2></div>
          <a className="button primary detail-dark-button" href="#contact">Start a conversation →</a>
        </div>
      </section>
    </main>
  );
}

export function ProjectDetail({ project }) {
  useEffect(() => window.scrollTo(0, 0), [project.slug]);

  return (
    <main className="detail-page project-detail-page">
      <section className="project-detail-hero">
        <img src={project.image} alt={project.title} />
        <div className="project-detail-overlay">
          <BackLink href="#projects" />
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <div className="project-meta"><span>{project.location}</span><span>{project.year}</span></div>
        </div>
      </section>

      <section className="section project-case-intro">
        <div className="container project-case-grid">
          <div><p className="eyebrow">PROJECT OVERVIEW</p><h2>Designed around how the space is meant to live.</h2></div>
          <div><p className="detail-copy">{project.description}</p><p className="scope-line"><strong>Scope</strong>{project.scope}</p></div>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="container">
          <div className="gallery-heading"><p className="eyebrow">PROJECT GALLERY</p><h2>Details, atmosphere<br />and material.</h2></div>
          <div className="project-detail-gallery">
            {project.gallery.map((image, index) => (
              <figure className={index === 0 ? "gallery-main" : ""} key={image + index}>
                <img src={image} alt={`${project.title} project view ${index + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-cta-band">
        <div className="container detail-cta-inner">
          <div><p className="eyebrow">YOUR PROJECT NEXT?</p><h2>Let's create something considered.</h2></div>
          <a className="button primary detail-dark-button" href="#contact">Start a conversation →</a>
        </div>
      </section>
    </main>
  );
}

export { services, projects };
