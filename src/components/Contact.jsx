import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", project: "", message: "" });

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    const text = [
      "Hello K7 Design Studio,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Project Type: ${form.project}`,
      `Message: ${form.message}`
    ].join("\\n");

    window.open(`https://wa.me/918072694197?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have A Project<br />In Mind?</h2>
          <p>
            Tell us what you are planning. Our team can discuss your architectural, interior, execution or landscape requirements.
          </p>

          <div className="contact-details">
            <a href="tel:+918072694197"><span>Call</span> 80726 94197</a>
            <a href="https://wa.me/918072694197" target="_blank" rel="noreferrer"><span>WhatsApp</span> Start a conversation</a>
            <p><span>Studio</span> No 4, First Floor, Baskar Nagar,<br />New Vellanur, Avadi, Chennai-600062</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <input name="name" value={form.name} onChange={update} required type="text" placeholder="Your Name" />
            <input name="phone" value={form.phone} onChange={update} required type="tel" placeholder="Phone Number" />
          </div>
          <input name="project" value={form.project} onChange={update} required type="text" placeholder="Project Type (Residential / Commercial / Interior...)" />
          <textarea name="message" value={form.message} onChange={update} required rows="6" placeholder="Tell us about your project..." />
          <button type="submit">Send Enquiry on WhatsApp →</button>
          <small>Your enquiry will open directly in WhatsApp to K7 Design Studio.</small>
        </form>
      </div>
    </section>
  );
}

export default Contact;
