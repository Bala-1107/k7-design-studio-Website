function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <p className="eyebrow">K7 DESIGN STUDIO · ARCHITECTS & INTERIORS</p>
        <h1>Spaces Designed<br />With Purpose.</h1>
        <p className="hero-description">
          Architectural planning, exterior and interior design, execution and landscape solutions for residential and commercial spaces.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="button primary">Explore Our Services</a>
          <a href="#contact" className="button secondary">Start a Conversation</a>
        </div>
      </div>
      <div className="hero-scroll">Scroll to explore <span>↓</span></div>
    </section>
  );
}

export default Hero;
