function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <div className="about-image image-frame">
          <img src="/k7-design-studio-Website/images/kavin-villa.png" alt="Kavin Villa designed by K7 Design Studio" />
          <span className="image-caption">Featured residential work · Kavin Villa</span>
        </div>

        <div className="about-content">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>Designing Ideas.<br />Executing Possibilities.</h2>
          <p>
            K7 DESIGN STUDIO is an architectural designing firm focused on planning, exterior and interior designing for residential and commercial buildings.
          </p>
          <p>
            We blend innovative ideas and techniques in design and execution with standards, guided by calculated work ethics and thoughtful project planning.
          </p>
          <p>
            Every project is approached with innovation and a strong commitment to client satisfaction — from the first idea to the finished space.
          </p>
          <a href="#contact" className="text-link">Work with K7 →</a>
        </div>
      </div>
    </section>
  );
}

export default About;
