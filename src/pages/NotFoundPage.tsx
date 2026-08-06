import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout not-found-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">404</p>
            <h1>We could not find that page.</h1>
            <p className="hero-description">
              The page you were looking for may have moved, may still be in development, or may not
              exist yet. Use the links below to keep exploring Tech Pathways Initiative.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/">
                Return Home
              </Link>
              <Link className="button button-secondary" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="program-status-card not-found-card">
            <h2>Need something specific?</h2>
            <p>
              Visit Programs, Get Involved, or Contact for the latest information about what Tech
              Pathways Initiative is building.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
