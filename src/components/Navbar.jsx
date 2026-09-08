import { useEffect, useState } from "react";

function MenuIcon() {
  return <span className="icon-lines" aria-hidden="true"><i></i><i></i><i></i></span>;
}

function CloseIcon() {
  return <span className="icon-close" aria-hidden="true">×</span>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="K7 Design Studio home">
          <img src="/images/k7-logo.png" alt="K7 Design Studio - Architects & Interiors" />
        </a>

        <nav className={`nav-links ${open ? "active" : ""}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button" onClick={closeMenu}>Let's Connect</a>

        <button
          type="button"
          className="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
