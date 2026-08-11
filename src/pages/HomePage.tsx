import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import codeBackdropImage from "../images/code-backdrop.jpg";
import { donationUrl } from "../donation";
import heroStemProjectImage from "../images/hero-stem-project.jpg";
import donateFigureImage from "../images/pexels-cottonbro-6986443.jpg";
import {
  featuredPrograms,
  getInvolvedOptions,
  heroCopy,
  impactGoals,
  missionStatement,
  pathwaySteps,
  supporterLogos,
} from "../siteContent";

const featuredProgramIcons: Record<string, string> = {
  "Tech Discovery": "◌",
  "Digital Foundations": "▣",
  "Code Forward": "</>",
};

export function HomePage() {
  const [donationSubmitted, setDonationSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleDonationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDonationSubmitted(true);
    event.currentTarget.reset();
  };

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main id="top">
      <section className="hero-section">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Empower. Educate. Elevate.</p>
            <h1>Creating pathways from technology exposure to technology careers.</h1>
            <p className="hero-description">{heroCopy}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/programs">
                Explore Our Programs
              </Link>
              <a
                className="button button-secondary"
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Support the Mission
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
            <img src={heroStemProjectImage} alt="Children collaborating on a STEM project." />
            <figcaption>
              Students develop technical and collaborative skills through hands-on STEM learning.
            </figcaption>
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

      <section id="problem" className="section problem-section">
        <div className="section-heading">
          <p className="section-label">The Need</p>
          <h2>Too many young people are left out of the technology economy.</h2>
          <p>
            Too many students with strong potential still lack early exposure, trusted guidance,
            and clear access to technology opportunities.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <h3>Limited early exposure</h3>
            <p>Students cannot pursue careers they have never been introduced to.</p>
          </article>
          <article className="problem-card">
            <h3>Mentorship gaps</h3>
            <p>Many youth lack regular guidance from professionals in technology fields.</p>
          </article>
          <article className="problem-card">
            <h3>Career pathway barriers</h3>
            <p>Without networks and preparation, transitioning from learning to employment is harder.</p>
          </article>
        </div>
      </section>

      <section id="pathway" className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Exposure -&gt; Education -&gt; Mentorship -&gt; Career Preparation</p>
          <h2>Building a clear pathway from first interest to workforce opportunity.</h2>
          <p>
            Each stage is designed to move students from awareness to skill-building, guidance,
            and real preparation for next-step opportunities.
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

      <section id="programs" className="section">
        <div className="section-heading">
          <p className="section-label">Programs in Development</p>
          <h2>Planned programs are being prepared with pilot partners before launch.</h2>
          <p>
            Explore the full Programs page to review each planned track, participation details,
            and pilot collaboration opportunities.
          </p>
        </div>
        <div className="programs-grid">
          {featuredPrograms.map((program) => (
            <article key={program.title} className="program-card">
              <img src={program.image} alt={program.alt} />
              <div className="program-card-body">
                <span className="program-icon" aria-hidden="true">
                  {featuredProgramIcons[program.title] ?? "•"}
                </span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Link className="button button-primary" to="/programs">
            View Programs in Development
          </Link>
        </div>
      </section>

      <section id="impact" className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Impact Goals</p>
          <h2>Initial goals that keep our work measurable and accountable.</h2>
        </div>
        <div className="impact-grid">
          {impactGoals.map((goal) => (
            <article key={goal.label} className="impact-card">
              <p className="impact-value">{goal.value}</p>
              <p className="impact-label">{goal.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="participate"
        className="code-banner"
        aria-label="Ways to participate"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url(${codeBackdropImage})`,
        }}
      >
        <div className="code-banner-inner">
          <p className="section-label section-label-light">Get Involved</p>
          <h2>Choose a meaningful way to support students and future programs.</h2>
          <div className="participation-grid">
            {getInvolvedOptions.map((option) => (
              <article key={option.id} className="participation-card">
                <h3>{option.title}</h3>
                <p>{option.shortDescription}</p>
                <Link className="button button-secondary" to="/get-involved">
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section supporters-section">
        <div className="section-heading">
          <p className="section-label">Partners &amp; Supporters</p>
          <h2>Community and industry collaboration strengthens student outcomes.</h2>
        </div>
        <div className="supporter-grid" aria-label="Partner and supporter logos">
          {supporterLogos.map((supporter) => (
            <div key={supporter} className="supporter-logo">
              {supporter}
            </div>
          ))}
        </div>
      </section>

      <section id="donate" className="section section-donate">
        <div className="donate-layout">
          <div className="donate-copy">
            <p className="section-label">Final Call to Action</p>
            <h2>Invest in future technologists across Greater Cleveland.</h2>
            <p>
              Every contribution helps expand workshops, mentorship access, career exposure, and
              workforce preparation for young people pursuing opportunity through technology.
            </p>
            <figure className="donate-figure">
              <img
                src={donateFigureImage}
                alt="Technology professionals working together at a table with laptops."
              />
              <figcaption>
                Volunteers, mentors, and community partners make each student pathway possible.
              </figcaption>
            </figure>
          </div>

          <form className="donation-form" onSubmit={handleDonationSubmit}>
            <h3>Support the Mission</h3>
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
            {donationSubmitted && (
              <p className="form-success" role="status">
                Thank you! We received your donation interest and will follow up shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      <section id="newsletter" className="section newsletter-section">
        <div className="newsletter-layout">
          <div>
            <p className="section-label">Newsletter Signup</p>
            <h2>Stay connected to student stories, programs, and opportunities to help.</h2>
          </div>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="newsletterEmail"
              placeholder="you@example.com"
              required
            />
            <button className="button button-primary" type="submit">
              Subscribe
            </button>
            {newsletterSubmitted && (
              <p className="form-success" role="status">
                Thanks for subscribing! We will keep you updated.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
