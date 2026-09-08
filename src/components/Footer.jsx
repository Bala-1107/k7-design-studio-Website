function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/k7-design-studio-Website/images/k7-logo.png" alt="K7 Design Studio" />
          <p>Architects & Interiors</p>
          <span>Planning · Design · Execution</span>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="tel:+918072694197">80726 94197</a>
          <a href="https://wa.me/918072694197" target="_blank" rel="noreferrer">WhatsApp</a>
          <p>No 4, First Floor, Baskar Nagar,<br />New Vellanur, Avadi,<br />Chennai-600062</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} K7 Design Studio. All rights reserved.</p>
        <p>Architects & Interiors</p>
      </div>
    </footer>
  );
}

export default Footer;
