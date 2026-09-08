const team = [
  {
    name: "K7 Team Member 01",
    role: "Principal Architect",
    text: "Leads design direction, planning and client collaboration from the first concept through delivery.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "K7 Team Member 02",
    role: "Architectural Designer",
    text: "Develops thoughtful plans, elevations and spatial solutions with a strong focus on functionality.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "K7 Team Member 03",
    role: "Interior Designer",
    text: "Shapes material palettes, interiors and details that balance character, comfort and everyday use.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "K7 Team Member 04",
    role: "3D Visualization Artist",
    text: "Turns design ideas into clear 3D visuals and walkthrough experiences before execution begins.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "K7 Team Member 05",
    role: "Execution & Project Coordinator",
    text: "Coordinates execution, vendors and site requirements to keep the approved design moving forward.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85"
  }
];

function Process() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="team-heading">
          <div>
            <p className="eyebrow">THE PEOPLE BEHIND K7</p>
            <h2>One Studio.<br />Five Perspectives.</h2>
          </div>
          <p>
            A multidisciplinary team bringing together architecture, interiors, visualization and execution — with one shared focus: creating spaces that work beautifully in real life.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <article className="team-card" key={member.name}>
              <div className="team-photo">
                <img src={member.image} alt={`${member.role} at K7 Design Studio`} loading="lazy" />
                <span className="team-index">0{index + 1}</span>
              </div>
              <div className="team-info">
                <p className="team-role">{member.role}</p>
                <h3>{member.name}</h3>
                <p>{member.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
