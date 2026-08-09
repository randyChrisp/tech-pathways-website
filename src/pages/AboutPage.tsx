import { Link } from "react-router-dom";
import { donationUrl } from "../donation";
import {
  aboutImage,
  aboutStory,
  boardRoles,
  communitiesServed,
  coreValues,
  founderBio,
  founderMessagePlaceholder,
  missionStatement,
  visionStatement,
} from "../siteContent";

const governanceDocuments = [
  {
   title: "Organizational Bylaws",
   description:
     "The bylaws establish the organization’s purpose, governance structure, board responsibilities, officer roles, financial oversight requirements, and decision-making procedures.",
   buttonLabel: "View Organizational Bylaws",
   to: "/governance#organizational-bylaws",
  },
  {
   title: "Conflict of Interest Policy",
   description:
     "This policy helps directors, officers, employees, and key volunteers identify, disclose, and appropriately address actual or potential conflicts of interest.",
   buttonLabel: "View Conflict of Interest Policy",
   to: "/documents/Tech_Pathways_Initiative_Conflict_of_Interest_Policy.pdf",
   external: true,
  },
  {
   title: "Board Governance",
   description:
     "Tech Pathways Initiative’s Board of Directors provides strategic leadership, financial oversight, policy guidance, and accountability for the organization’s mission and resources.",
   buttonLabel: "Learn About Our Governance",
   to: "/governance#board-governance",
  },
];

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
          <p className="section-label">Governance &amp; Transparency</p>
          <h2>Responsible leadership and clear communication build trust with students, families, partners, and communities.</h2>
          <p>
            Tech Pathways Initiative is committed to responsible governance, ethical leadership,
            financial stewardship, and clear communication with the students, families, partners,
            and communities we serve.
          </p>
        </div>
        <div className="governance-grid">
          {governanceDocuments.map((document) => (
            <article key={document.title} className="document-card">
              <h3>{document.title}</h3>
              <p>{document.description}</p>
              {document.external ? (
                <a
                  className="button button-secondary"
                  href={document.to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.buttonLabel}
                </a>
              ) : (
                <Link className="button button-secondary" to={document.to}>
                  {document.buttonLabel}
                </Link>
              )}
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
            <a
              className="button button-primary"
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
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




