import "./App.css";
import { useState, type FormEvent } from "react";
import logo from "./images/TPI black bg.png";

const missionStatement =
  "To empower inner city youth in underserved communities through technology education, mentorship, career exposure, and workforce development opportunities that create pathways into high-paying IT careers.";

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
          <a href="#focus">Focus Areas</a>
          <a href="#impact">Impact</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Get Involved</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">Empower. Educate. Elevate.</p>
            <h1>Creating clear pathways into high-paying IT careers.</h1>
            <p className="hero-description">{missionStatement}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#donate">
                Donate Now
              </a>
              <a className="button button-secondary" href="#mission">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section id="mission" className="section">
          <h2>Our Mission</h2>
          <p>{missionStatement}</p>
        </section>

        <section id="focus" className="section section-soft">
          <h2>How We Build Opportunity</h2>
          <div className="cards">
            <article className="card">
              <h3>Technology Education</h3>
              <p>
                Hands-on training in digital literacy, coding fundamentals, and IT skills
                aligned with today&apos;s job market.
              </p>
            </article>
            <article className="card">
              <h3>Mentorship</h3>
              <p>
                Consistent guidance from industry professionals who help youth build confidence,
                discipline, and long-term career direction.
              </p>
            </article>
            <article className="card">
              <h3>Career Exposure</h3>
              <p>
                Real-world insight into tech career paths through guest speakers, company visits,
                and practical workplace experiences.
              </p>
            </article>
            <article className="card">
              <h3>Workforce Development</h3>
              <p>
                Career readiness support including resume preparation, interview coaching, and
                professional skill-building for employment success.
              </p>
            </article>
          </div>
        </section>

        <section id="impact" className="section">
          <h2>Why It Matters</h2>
          <div className="stats">
            <article>
              <span className="stat-value">Youth-Centered</span>
              <p>Programs designed to meet students where they are and support their growth.</p>
            </article>
            <article>
              <span className="stat-value">Community-Driven</span>
              <p>Built in collaboration with families, educators, and local partners.</p>
            </article>
            <article>
              <span className="stat-value">Career-Focused</span>
              <p>
                Focused on practical pathways that lead to sustainable, high-paying IT
                opportunities.
              </p>
            </article>
          </div>
        </section>

        <section id="donate" className="section section-donate">
          <h2>Support the Mission</h2>
          <p>
            Every contribution helps us expand technology education and career opportunities for
            youth in underserved communities.
          </p>
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
