import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ServicesDirectory, ProjectsDirectory } from "./components/DirectoryPages";

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [type, slug] = hash.split("/");

  // The homepage is unchanged. These routes exist only behind the
  // More Details buttons in the Services and Projects sections.
  if (type === "services-all" || type === "services") {
    return { type: "services", focus: null };
  }
  if (type === "projects-all" || type === "projects") {
    return { type: "projects", focus: null };
  }

  // Backward compatibility for any old links/bookmarks.
  if (type === "service") return { type: "services", focus: slug || null };
  if (type === "project") return { type: "projects", focus: slug || null };

  return { type: "home", section: type || "home" };
}

function scrollToSection(id) {
  if (!id || id === "home") {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return;
  }

  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (route.type === "services" || route.type === "projects") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    scrollToSection(route.section);
  }, [route]);

  if (route.type === "services") {
    return (
      <div className="site directory-site">
        <Navbar />
        <ServicesDirectory focus={route.focus} />
        <Contact />
        <Footer />
      </div>
    );
  }

  if (route.type === "projects") {
    return (
      <div className="site directory-site">
        <Navbar />
        <ProjectsDirectory focus={route.focus} />
        <Contact />
        <Footer />
      </div>
    );
  }

  // ORIGINAL HOMEPAGE — intentionally kept exactly as provided.
  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
