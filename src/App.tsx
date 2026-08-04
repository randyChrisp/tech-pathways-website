import "./App.css";
import { useState, type FormEvent } from "react";
import logo from "./images/TPI black bg.png";
import heroStemProjectImage from "./images/hero-stem-project.jpg";
import exposureImage from "./images/exposure-section.jpg";
import mentorshipCardImage from "./images/mentorship-card.jpg";
import careerPathwaysImage from "./images/career-pathways.jpg";
import codingOfficeImage from "./images/it-careers-office.jpg";
import volunteerCollaborationImage from "./images/volunteer-collaboration.jpg";
import codeBackdropImage from "./images/code-backdrop.jpg";

const missionStatement =
  "To empower inner city youth in underserved communities through technology education, mentorship, career exposure, and workforce development opportunities that create pathways into high-paying IT careers.";

const imagery = {
  hero: heroStemProjectImage,
  careerPathways: careerPathwaysImage,
  codingOffice: codingOfficeImage,
  volunteer: volunteerCollaborationImage,
  codeBackdrop: codeBackdropImage,
};

const pathwaySteps = [
  {
    phase: "Exposure",
    title: "Hands-on experiences make technology feel reachable.",
    description:
      "We introduce students to engaging STEM environments that replace uncertainty with curiosity, confidence, and excitement.",
    image: exposureImage,
    alt: "Students collaborating on a hands-on technology project.",
  },
  {
    phase: "Education",
    title: "Practical learning builds strong technical foundations.",
    description:
      "Students grow through digital literacy, coding, and project-based instruction that connects classroom learning to real career skills.",
    image: imagery.hero,
    alt: "Children collaborating on a STEM project with a laptop and 3D printer.",
  },
  {
    phase: "Mentorship",
    title: "Guidance turns interest into direction.",
    description:
      "Mentors help young people navigate goals, ask bigger questions, and see a future for themselves in the technology sector.",
    image: mentorshipCardImage,
    alt: "An adult mentor helping two students with their work at a table.",
  },
  {
    phase: "Career",
    title: "Career pathways connect learning to long-term opportunity.",
    description:
      "We prepare participants for the workforce with exposure to professional teams, IT roles, and the habits needed to thrive.",
    image: imagery.careerPathways,
    alt: "Three women collaborating around a computer in a professional environment.",
  },
];


function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleDonationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="landing-page">
      <header className="site-header">
        <a className="brand" href="#top">
          <img className="brand-logo" src={logo} alt="Tech Pathways Initiative logo" />
          <span className="brand-name">Tech Pathways Initiative</span>
        </a>
        <nav className="site-nav" aria-label="Main">
          <a href="#mission">Mission</a>
          <a href="#journey">Pathway</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Get Involved</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Empower. Educate. Elevate.</p>
              <h1>Empowering the next generation of technology leaders.</h1>
              <p className="hero-description">{missionStatement}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#donate">
                  Donate Now
                </a>
                <a className="button button-secondary" href="#journey">
                  Explore the Pathway
                </a>
              </div>
              <ul className="hero-highlights" aria-label="Organization priorities">
                <li>Technology education</li>
                <li>Mentorship</li>
                <li>Career exposure</li>
                <li>Workforce development</li>
              </ul>
            </div>

            <figure className="hero-media floating-card">
              <img src={imagery.hero} alt="Children collaborating on a STEM project." />
              <figcaption>Recommended hero image: teamwork, technology, and hands-on learning.</figcaption>
            </figure>
          </div>
        </section>

        <section id="mission" className="section mission-section">
          <div className="mission-panel">
            <div>
              <p className="section-label">Our Mission</p>
              <h2>Technology access should open doors, not highlight barriers.</h2>
            </div>
            <p className="mission-statement">{missionStatement}</p>
          </div>
        </section>

        <section id="journey" className="section section-soft">
          <div className="section-heading">
            <p className="section-label">Exposure -&gt; Education -&gt; Mentorship -&gt; Career</p>
            <h2>Building a clear pathway from first interest to workforce opportunity.</h2>
            <p>
              The strongest visual story for Tech Pathways Initiative starts with early exposure,
              grows through guided learning, and leads to professional opportunity.
            </p>
          </div>

          <div className="story-grid">
            {pathwaySteps.map((step) => (
              <article key={step.phase} className="story-card">
                <img className="story-image" src={step.image} alt={step.alt} />
                <div className="story-card-body">
                  <span className="story-phase">{step.phase}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section spotlight-section">
          <div className="spotlight-copy">
            <p className="section-label">Career Readiness</p>
            <h2>Students need more than inspiration. They need a bridge to the industry.</h2>
            <p>
              We pair technical learning with exposure to collaborative workplaces, professional
              expectations, and high-paying IT career possibilities.
            </p>
            <ul className="checklist">
              <li>Industry mentors who provide direction and accountability</li>
              <li>Career exploration that makes IT roles visible and achievable</li>
              <li>Workforce development support for resumes, interviews, and professionalism</li>
            </ul>
          </div>

          <div className="spotlight-gallery">
            <figure className="gallery-card large">
              <img
                src={imagery.codingOffice}
                alt="Technology professional coding in an office environment."
              />
              <figcaption>Professional environments students can grow into.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img
                src={imagery.careerPathways}
                alt="Three women collaborating with technology in a workplace."
              />
              <figcaption>Representation matters in tech career pathways.</figcaption>
            </figure>
          </div>
        </section>

        <section
          className="code-banner"
          aria-label="Technology themed background section"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url(${imagery.codeBackdrop})`,
          }}
        >
          <div className="code-banner-inner">
            <p className="section-label section-label-light">Digital Future</p>
            <h2>From curiosity in the classroom to confidence in the workplace.</h2>
            <p>
              Tech Pathways Initiative uses real-world learning, caring mentorship, and career
              exposure to help students see technology as a future they can own.
            </p>
          </div>
        </section>

        <section id="donate" className="section section-donate">
          <div className="donate-layout">
            <div className="donate-copy">
              <p className="section-label">Support the Mission</p>
              <h2>Invest in the talent already present in underserved communities.</h2>
              <p>
                Every contribution helps expand workshops, mentorship access, career exposure, and
                workforce preparation for young people pursuing opportunity through technology.
              </p>
              <figure className="donate-figure">
                <img
                  src={imagery.volunteer}
                  alt="Technology professionals working together at a table with laptops."
                />
                <figcaption>Volunteers, mentors, and partners help power the pathway.</figcaption>
              </figure>
            </div>

            <form className="donation-form" onSubmit={handleDonationSubmit}>
              <label>
                Full Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email Address
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                Donation Amount (USD)
                <input type="number" name="amount" min="1" step="1" placeholder="50" required />
              </label>
              <label>
                Message (Optional)
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share why this mission matters to you."
                />
              </label>
              <button className="button button-primary" type="submit">
                Submit Donation Interest
              </button>
              {submitted && (
                <p className="form-success" role="status">
                  Thank you! We received your donation interest and will follow up shortly.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <h2>Get Involved</h2>
        <p>
          Join Tech Pathways Initiative as a volunteer, mentor, donor, or community partner to
          help shape the next generation of tech talent.
        </p>
        <a className="button button-primary" href="mailto:info@techpathwaysinitiative.org">
          Contact Us
        </a>
      </footer>
    </div>
  );
}

export default App;
