const services = [
  {
    number: "01",
    title: "Architectural Services",
    description: "2D & 3D plan layouts, elevations, structural drawings, electrical and plumbing drawings.",
    image: "/k7-design-studio-Website/images/architecture.png",
    slug: "architectural-services"
  },
  {
    number: "02",
    title: "3D Visualization",
    description: "Interior design concepts and walkthrough visualization that help you experience the space before execution.",
    image: "/k7-design-studio-Website/images/dining-interior.png",
    slug: "3d-visualization"
  },
  {
    number: "03",
    title: "Interior Execution & PMC",
    description: "From approved design to execution, we coordinate the transformation of interiors with attention to detail.",
    image: "/k7-design-studio-Website/images/interior-living.png",
    slug: "interior-execution-pmc"
  },
  {
    number: "04",
    title: "Landscape Design & Execution",
    description: "Thoughtful landscape design and execution that completes the character of residential and commercial environments.",
    image: "/k7-design-studio-Website/images/kavin-villa.png",
    slug: "landscape-design-execution"
  }
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>From Drawing<br />To Delivery.</h2>
          </div>
          <p>
            K7 Design Studio specializes in architectural layouts, exterior designing, interior designing, interior execution, landscape designing and walkthrough animations.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card service-card-overlay" key={service.number}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <div className="service-overlay-content">
                    <span className="service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-actions">
                      <a href="#services-all" className="service-more">More Details ↗</a>
                      <a href="#contact" className="service-enquire">Enquire →</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
