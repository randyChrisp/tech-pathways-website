import { useState, type FormEvent } from "react";
import { sendFormAsEmail } from "../formEmail";

const contactReasons = [
  { value: "", label: "Select a reason for contact" },
  { value: "student-parent", label: "Student or parent interest" },
  { value: "mentoring", label: "Mentoring" },
  { value: "volunteering", label: "Volunteering" },
  {
    value: "school-community-partnership",
    label: "School or community partnership",
  },
  { value: "corporate-sponsorship", label: "Corporate sponsorship" },
  { value: "media-inquiry", label: "Media inquiry" },
  { value: "general", label: "General question" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tech-pathways-initiaitve",
    handle: "@techpathwaysinitiative",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593123514261",
    handle: "Tech Pathways Initiative",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tech_pathways_initiative/",
    handle: "@techpathwaysinitiative",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/techpathwaysinit",
    handle: "@techpathwaysinit",
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendFormAsEmail("Contact Form", event);
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">Contact</p>
            <h1>Get in touch with Tech Pathways Initiative.</h1>
            <p className="hero-description">
              Whether you are a student, parent, mentor, educator, employer, or
              community partner, we want to hear from you. Use the form below to
              send a message, or reach out directly by email.
            </p>
          </div>
          <div className="program-status-card">
            <h2>We aim to respond within 3 to 5 business days.</h2>
            <p>
              All inquiries are reviewed by the Tech Pathways Initiative team.
              We respond to every message as quickly as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="contact-page-layout">
          <div className="contact-form-col">
            <p className="section-label">Send a Message</p>
            <h2>Tell us who you are and how we can help.</h2>
            <form
              className="interest-form contact-form"
              onSubmit={handleSubmit}
            >
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Organization or Affiliation
                <input
                  type="text"
                  name="organization"
                  placeholder="School, employer, or organization (optional)"
                />
              </label>
              <label>
                Reason for Contact
                <select name="reason" required>
                  {contactReasons.map((reason) => (
                    <option key={reason.value} value={reason.value}>
                      {reason.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Send Message
              </button>
              {submitted && (
                <p className="form-success" role="status">
                  Thank you for reaching out. We will respond within 3 to 5
                  business days.
                </p>
              )}
            </form>
          </div>

          <div className="contact-info-col">
            <div className="contact-direct-card">
              <p className="section-label">Direct Contact</p>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@techpathwaysinitiative.org">
                  info@techpathwaysinitiative.org
                </a>
              </p>

              <h3>Location</h3>
              <p>Greater Cleveland, Ohio</p>

              <h3>Response Time</h3>
              <p>
                We aim to respond to all inquiries within 3 to 5 business days.
              </p>
            </div>

            <div className="contact-social-card">
              <p className="section-label">Follow Us</p>
              <h3>Social Media</h3>
              <p className="contact-social-note">
                Social media accounts are being established. Links will be
                updated as channels are launched.
              </p>
              <ul className="social-links-list">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <strong>{link.label}:</strong>{" "}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-reasons-card">
              <p className="section-label">How We Can Help</p>
              <h3>Common reasons to reach out</h3>
              <ul className="reason-list">
                {contactReasons.slice(1).map((reason) => (
                  <li key={reason.value}>{reason.label}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
