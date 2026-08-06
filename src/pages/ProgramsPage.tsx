import { programsInDevelopment } from "../siteContent";

export function ProgramsPage() {
  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">Programs</p>
            <h1>Programs in Development</h1>
            <p className="hero-description">
              Tech Pathways Initiative is currently designing and validating pilot programs with
              school and community partners. We are not presenting these programs as launched
              offerings yet.
            </p>
          </div>
          <div className="program-status-card">
            <h2>Pilot Partner Invitation</h2>
            <p>
              Schools and community organizations are invited to help shape early cohorts and
              implementation plans.
            </p>
            <a
              className="button button-primary"
              href="mailto:info@techpathwaysinitiative.org?subject=Programs%20Pilot%20Partner%20Interest"
            >
              Become a Pilot Partner
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Planned Program Model</p>
          <h2>Program outlines are structured for clarity before launch.</h2>
          <p>
            Each program includes target group, schedule, expected outcomes, and participation
            details so families and partners can understand what to expect as pilots roll out.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="program-detail-grid">
          {programsInDevelopment.map((program) => (
            <article key={program.name} className="program-detail-card">
              <header className="program-detail-header">
                <p className="section-label">Programs in Development</p>
                <h2>{program.name}</h2>
              </header>
              <div className="program-overview-grid">
                <div>
                  <h3>Purpose</h3>
                  <p>{program.purpose}</p>
                </div>
                <div>
                  <h3>Possible activities</h3>
                  <p>{program.possibleActivities}</p>
                </div>
                <div>
                  <h3>Target group</h3>
                  <p>{program.targetGroup}</p>
                </div>
                <div>
                  <h3>Schedule</h3>
                  <p>{program.schedule}</p>
                </div>
                <div>
                  <h3>Expected outcomes</h3>
                  <p>{program.expectedOutcomes}</p>
                </div>
                <div>
                  <h3>Participation instructions</h3>
                  <p>{program.participationInstructions}</p>
                </div>
              </div>

              <div className="program-qa-grid" aria-label={`${program.name} key questions`}>
                <div>
                  <h3>Who is eligible?</h3>
                  <p>{program.eligibility}</p>
                </div>
                <div>
                  <h3>What will students learn?</h3>
                  <p>{program.studentLearning}</p>
                </div>
                <div>
                  <h3>How long does it last?</h3>
                  <p>{program.duration}</p>
                </div>
                <div>
                  <h3>Is it free?</h3>
                  <p>{program.freeOrPaid}</p>
                </div>
                <div>
                  <h3>Where is it held?</h3>
                  <p>{program.location}</p>
                </div>
                <div>
                  <h3>What technology is provided?</h3>
                  <p>{program.technologyProvided}</p>
                </div>
                <div>
                  <h3>How do parents register students?</h3>
                  <p>{program.parentRegistration}</p>
                </div>
                <div>
                  <h3>When does the next cohort begin?</h3>
                  <p>{program.nextCohort}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="cta-panel">
          <div>
            <p className="section-label">Pilot Collaboration</p>
            <h2>Help co-design the first program cohorts.</h2>
            <p>
              If you represent a school, youth organization, employer, or community partner, we
              would like to collaborate on pilot implementation.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="button button-primary"
              href="mailto:info@techpathwaysinitiative.org?subject=Pilot%20Program%20Collaboration"
            >
              Contact for Pilot Planning
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
