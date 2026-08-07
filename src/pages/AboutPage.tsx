import { Link } from "react-router-dom";
import {
  aboutImage,
  aboutStory,
  boardRoles,
  communitiesServed,
  coreValues,
  founderBio,
  founderMessagePlaceholder,
  missionStatement,
  transparencyItems,
  visionStatement,
} from "../siteContent";

export function AboutPage() {
  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">About Us</p>
            <h1>Building access, guidance, and opportunity for the next generation.</h1>
            <p className="hero-description">
              Tech Pathways Initiative was established to help close the technology opportunity gap
              by providing young people in underserved communities with access to technical
              education, professional mentors, career exploration, and workforce preparation.
            </p>
          </div>
          <figure className="inner-hero-media">
            <img src={aboutImage} alt="Professionals collaborating around a table with laptops." />
            <figcaption>
              Technology pathways grow stronger when students are supported by community and
              professional networks.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Our Story</p>
          <h2>Why Tech Pathways Initiative was founded.</h2>
        </div>
        <div className="narrative-panel">
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="mission-vision-grid">
          <article className="info-panel">
            <p className="section-label">Mission</p>
            <h2>Our mission centers on access and long-term opportunity.</h2>
            <p>{missionStatement}</p>
          </article>
          <article className="info-panel">
            <p className="section-label">Vision</p>
            <h2>A future where opportunity is not limited by ZIP code, household income, or access to resources.</h2>
            <p>{visionStatement}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Core Values</p>
          <h2>We work to reduce economic, geographic, educational, and technology-access barriers that can prevent young people from pursuing technology opportunities.</h2>
        </div>
        <div className="values-grid">
          {coreValues.map((value) => (
            <article key={value} className="value-card">
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Who We Serve</p>
          <h2>Focused on students who deserve stronger pathways into technology.</h2>
        </div>
        <div className="communities-grid">
          {communitiesServed.map((item) => (
            <article key={item.title} className="community-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section founder-section">
        <div className="founder-layout">
          <div className="headshot-placeholder" aria-label="Founder headshot placeholder">
            <span>Professional headshot coming soon</span>
          </div>
          <div className="founder-copy">
            <p className="section-label">Founder</p>
            <h2>Randy Chrisp</h2>
            <p>{founderBio}</p>
            <div className="founder-message-card">
              <h3>Founder's Message</h3>
              <p>{founderMessagePlaceholder}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Board of Directors</p>
          <h2>Governance roles that support mission alignment and organizational accountability.</h2>
          <p>
            Board membership details can be updated here as appointments are finalized.
          </p>
        </div>
        <div className="board-grid">
          {boardRoles.map((role) => (
            <article key={role.title} className="board-card">
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Transparency</p>
          <h2>Clear communication helps build trust with students, families, and supporters.</h2>
        </div>
        <div className="transparency-grid">
          {transparencyItems.map((item) => (
            <article key={item.title} className="transparency-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-cta-section">
        <div className="cta-panel">
          <div>
            <p className="section-label">Stay Connected</p>
            <h2>Learn more about the mission and help shape what comes next.</h2>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href="/#donate">
              Support the Mission
            </a>
            <Link className="button button-secondary" to="/">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}




