import { Link } from "react-router-dom";

export function GovernancePage() {
  return (
    <main className="governance-page">
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">Governance &amp; Transparency</p>
            <h1>Responsible leadership and clear accountability for every community we serve.</h1>
            <div className="cta-actions">
              <Link className="button button-primary" to="/about">
                Back to About
              </Link>
              <a className="button button-secondary" href="mailto:info@techpathwaysinitiative.org?subject=Governance%20Inquiry">
                Contact the Team
              </a>
            </div>
          </div>
          <div className="program-status-card">
            <h2>Our commitment to stewardship</h2>
            <p>
              We are building systems that support strong oversight, responsible decision-making, and
              transparent communication as the organization grows.
            </p>
          </div>
        </div>
      </section>

      <section id="board-governance" className="section">
        <div className="section-heading">
          <p className="section-label">Board Governance</p>
          <h2>Board leadership that guides strategy, oversight, and accountability.</h2>
        </div>
        <div className="governance-content-card">
          <p>
            Tech Pathways Initiative is governed by a volunteer Board of Directors responsible for
            mission oversight, strategic planning, financial stewardship, policy approval,
            organizational accountability, and evaluation of executive leadership. Directors are
            expected to act with care, loyalty, integrity, and commitment to the organization’s
            charitable purpose.
          </p>
          <p>
            As the organization grows, the board will continue to help shape mission alignment,
            operational priorities, and transparent communication with supporters and the public.
          </p>
          <div className="document-actions">
            <a
              className="button button-primary"
              href="/documents/Tech_Pathways_Initiative_Governance_Overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Governance Overview
            </a>
            <a
              className="button button-secondary"
              href="/documents/Tech_Pathways_Initiative_Governance_Overview.pdf"
              download
            >
              Download PDF
            </a>
          </div>
          <div className="document-viewer">
            <iframe
              src="/documents/Tech_Pathways_Initiative_Governance_Overview.pdf"
              title="Tech Pathways Initiative Governance Overview"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
