const firstYearGoals = [
  {
    value: "50",
    label: "Students in hands-on technology experiences",
    context: "First-year goal",
  },
  {
    value: "20",
    label: "Technology mentors recruited",
    context: "First-year goal",
  },
  {
    value: "5",
    label: "School or community partnerships established",
    context: "First-year goal",
  },
  {
    value: "4",
    label: "Employer-site or career-exposure experiences",
    context: "First-year goal",
  },
  {
    value: "100%",
    label: "Students complete a project or portfolio item",
    context: "First-year goal",
  },
];

const futureMetrics = [
  "Students enrolled across all active program tracks",
  "Program completion rate per cohort",
  "Total mentor hours contributed",
  "Student projects or portfolio items completed",
  "Certifications earned or in progress",
  "Internships and work-based learning placements",
  "Student and parent satisfaction and testimonial data",
  "Annual reports for supporters and the community",
];

export function ImpactPage() {
  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">Impact</p>
            <h1>
              Measuring what matters, starting with clear first-year goals.
            </h1>
            <p className="hero-description">
              Tech Pathways Initiative has not yet launched programs, so this
              page reflects planned goals rather than completed results. Our
              commitment is to report honestly — goals until we have outcomes,
              and outcomes once students have been served.
            </p>
          </div>
          <div className="program-status-card">
            <h2>Goals, not invented statistics.</h2>
            <p>
              We believe transparent goal-setting builds more trust than
              premature claims. This page will be updated as programs launch and
              data becomes available.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">First-Year Goals</p>
          <h2>What Tech Pathways Initiative is working toward in year one.</h2>
          <p>
            These targets will guide our pilot program planning, partnership
            development, and resource allocation as we move from design to
            delivery.
          </p>
        </div>
        <div className="impact-grid" style={{ marginTop: "2rem" }}>
          {firstYearGoals.map((goal) => (
            <article key={goal.label} className="impact-card">
              <p className="impact-context">{goal.context}</p>
              <p className="impact-value">{goal.value}</p>
              <p className="impact-label">{goal.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">How We Will Measure Success</p>
          <h2>
            These metrics will be tracked once programs launch and students are
            enrolled.
          </h2>
          <p>
            We are setting up accountability systems now so that meaningful data
            is available when programs begin. Each metric below will be reported
            publicly in annual updates.
          </p>
        </div>
        <div className="future-metrics-list">
          {futureMetrics.map((metric) => (
            <div key={metric} className="metric-item">
              <span className="metric-dot" aria-hidden="true" />
              <p>{metric}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Student Stories</p>
          <h2>
            Student and parent testimonials will be shared as programs progress.
          </h2>
          <p>
            Once pilot cohorts complete programming, we will feature student
            experiences and family perspectives here with proper consent. We do
            not fabricate or anticipate testimonials.
          </p>
        </div>
        <div className="testimonial-placeholder">
          <p>
            Student stories will appear here after programs launch and
            participants provide consent.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Annual Reports</p>
          <h2>Reporting will begin after the first full program year.</h2>
          <p>
            Tech Pathways Initiative will publish an annual impact report
            covering program activity, financial stewardship, and student
            outcomes. Reports will be made available publicly on this page.
          </p>
        </div>
        <div className="report-placeholder">
          <p>Annual reports will be posted here as they are published.</p>
        </div>
      </section>

      <section className="section">
        <div className="cta-panel">
          <div>
            <p className="section-label">Help Build the Impact</p>
            <h2>
              Early partners and supporters directly influence what we can
              achieve.
            </h2>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href="/get-involved">
              Get Involved
            </a>
            <a className="button button-secondary" href="/#donate">
              Support Financially
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
