const sponsorshipLevels = [
  {
    level: "Pathway Partner",
    range: "$500 – $1,499",
    description:
      "Entry-level program support that helps cover instructional materials and student resources.",
    benefits: [
      "Acknowledgment in program communications",
      "Organization name listed on the Tech Pathways website",
      "Annual impact update",
    ],
  },
  {
    level: "Community Champion",
    range: "$1,500 – $4,999",
    description:
      "Mid-level sponsorship that expands student access and supports workshop delivery.",
    benefits: [
      "Everything in Pathway Partner",
      "Recognition in program materials and events",
      "Opportunity to provide a guest speaker or workplace tour",
      "Social media recognition",
    ],
  },
  {
    level: "Technology Advocate",
    range: "$5,000 – $9,999",
    description:
      "High-impact sponsorship that can fund a complete program track or pilot cohort.",
    benefits: [
      "Everything in Community Champion",
      "Named recognition tied to a specific program or event",
      "Logo placement on program materials (with approval)",
      "Invitation to partner events and milestone activities",
    ],
  },
  {
    level: "Cornerstone Sponsor",
    range: "$10,000+",
    description:
      "Lead-level partnership that directly shapes the scope and reach of Tech Pathways Initiative programming.",
    benefits: [
      "Everything in Technology Advocate",
      "Named sponsorship opportunity for a program cohort or annual initiative",
      "Direct partnership engagement with the founding team",
      "Priority consideration for pilot employer partnerships and internship collaboration",
      "Customized impact reporting for your organization",
    ],
  },
];

const inKindNeeds = [
  {
    title: "Laptop Computers",
    description:
      "Functional laptops for use in program activities. Devices should be capable of running standard productivity and coding tools.",
  },
  {
    title: "Monitors and Peripherals",
    description:
      "Monitors, keyboards, mice, and accessories that support computer literacy and digital skills instruction.",
  },
  {
    title: "Networking Equipment",
    description:
      "Routers, switches, and related equipment for establishing technology learning environments.",
  },
  {
    title: "Printing and Presentation Equipment",
    description:
      "Printers, projectors, and display technology for classroom and presentation use.",
  },
  {
    title: "Gift Cards and Supplies",
    description:
      "Gift cards to technology retailers, office supply stores, or learning platforms.",
  },
  {
    title: "Professional Development Resources",
    description:
      "Books, subscriptions, and learning tools for facilitators supporting program delivery.",
  },
];

const employerOpportunities = [
  {
    title: "Workplace Tours",
    description:
      "Host a small group of students for a guided visit to your office, data center, or technology workspace.",
  },
  {
    title: "Career Panel Presentations",
    description:
      "Send team members to speak with students about technology careers, their own pathways, and the day-to-day of working in tech.",
  },
  {
    title: "Mentoring Relationships",
    description:
      "Match employees with students in a structured mentoring track over several months.",
  },
  {
    title: "Capstone Project Support",
    description:
      "Provide technical guidance or review for student projects developed through program tracks.",
  },
  {
    title: "Internship Pathways",
    description:
      "Work with Tech Pathways Initiative to create internship or work-based learning opportunities for program graduates.",
  },
  {
    title: "Technology Team Volunteers",
    description:
      "Organize employee volunteer teams to support workshops, hackathons, or career days.",
  },
];

export function PartnersSponsorsPage() {
  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">Partners &amp; Sponsors</p>
            <h1>
              Invest in what becomes possible when young people have access and
              support.
            </h1>
            <p className="hero-description">
              Partner with Tech Pathways Initiative to help students experience
              technology beyond the classroom. Schools, employers, community
              organizations, and technology professionals can contribute through
              workshops, workplace tours, mentoring, equipment, internships, and
              financial sponsorship.
            </p>
          </div>
          <div className="program-status-card">
            <h2>Pilot partner opportunities are open now.</h2>
            <p>
              Become an early partner and help shape the programs and
              experiences that will serve Greater Cleveland students for years
              to come.
            </p>
            <a
              className="button button-secondary"
              href="mailto:info@techpathwaysinitiative.org?subject=Partnership%20Inquiry"
            >
              Reach Out About Partnership
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Partnership Opportunities</p>
          <h2>Multiple ways to make a meaningful contribution.</h2>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <h3>School Partnerships</h3>
            <p>
              Host pilot programs, refer students, provide classroom or lab
              space, and connect educators to Tech Pathways resources.
            </p>
          </article>
          <article className="problem-card">
            <h3>Community Organization Partnerships</h3>
            <p>
              Collaborate to identify and enroll students, co-host community
              programs, and amplify outreach within trusted networks.
            </p>
          </article>
          <article className="problem-card">
            <h3>Employer Partnerships</h3>
            <p>
              Provide career exposure experiences, mentorship, internship
              pathways, and professional volunteers for students building
              technology skills.
            </p>
          </article>
          <article className="problem-card">
            <h3>Foundation and Grant Partnerships</h3>
            <p>
              Fund program development, pilot cohorts, student resources, or
              workforce readiness tracks through philanthropic investment.
            </p>
          </article>
          <article className="problem-card">
            <h3>Technology Company Partnerships</h3>
            <p>
              Contribute equipment, software access, technical training support,
              and professional mentors from inside the technology industry.
            </p>
          </article>
          <article className="problem-card">
            <h3>Civic and Advocacy Organization Partnerships</h3>
            <p>
              Organizations like the Urban League and similar civic partners can
              amplify student reach, co-design programming, and strengthen
              community accountability.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Sponsorship Levels</p>
          <h2>
            Financial contributions at every level help students move forward.
          </h2>
          <p>
            All sponsorships are pending formal nonprofit filing and IRS
            determination. Please contact us for current giving guidance.
          </p>
        </div>
        <div className="sponsorship-levels-grid">
          {sponsorshipLevels.map((tier) => (
            <article key={tier.level} className="sponsorship-card">
              <div className="sponsorship-card-header">
                <h3>{tier.level}</h3>
                <p className="sponsorship-range">{tier.range}</p>
              </div>
              <p>{tier.description}</p>
              <ul className="benefit-list">
                {tier.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">In-Kind Donations</p>
          <h2>
            Technology equipment and supplies expand student access directly.
          </h2>
        </div>
        <div className="programs-grid">
          {inKindNeeds.map((item) => (
            <article key={item.title} className="community-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Employer Engagement</p>
          <h2>
            Employers can create exposure that changes how students see their
            future.
          </h2>
        </div>
        <div className="programs-grid">
          {employerOpportunities.map((item) => (
            <article key={item.title} className="community-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Partner Benefits</p>
          <h2>
            Partners gain meaningful connection to the next generation of
            technology talent.
          </h2>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <h3>Early pipeline access</h3>
            <p>
              Build relationships with students years before they enter the
              workforce, supporting long-term talent pipeline development.
            </p>
          </article>
          <article className="problem-card">
            <h3>Community visibility</h3>
            <p>
              Partners will be recognized in program communications and across
              digital channels as organizational approvals allow.
            </p>
          </article>
          <article className="problem-card">
            <h3>Impact reporting</h3>
            <p>
              Receive periodic updates on program growth, student engagement,
              and the measurable outcomes that your support helped create.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Partner Logos</p>
          <h2>
            Partner and sponsor recognition coming as partnerships are
            confirmed.
          </h2>
          <p>
            We will display partner and sponsor logos on this page after
            receiving written permission from each organization. No logos or
            company names will appear without prior approval.
          </p>
        </div>
        <div className="partner-logo-placeholder">
          <p>
            Partner logos will appear here as formal partnership agreements are
            established.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Sponsorship Packet</p>
          <h2>
            Organizational documents and a capabilities statement are in
            development.
          </h2>
          <p>
            A downloadable sponsorship packet and capabilities statement will be
            available here once organizational materials are finalized. Contact
            us directly to request current information.
          </p>
        </div>
        <div className="cta-panel" style={{ marginTop: "1.5rem" }}>
          <div>
            <p>
              Ready to start a conversation about partnership, sponsorship, or
              in-kind support?
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="button button-primary"
              href="mailto:info@techpathwaysinitiative.org?subject=Partnership%20Inquiry"
            >
              Contact for Partnership Details
            </a>
            <a
              className="button button-secondary"
              href="mailto:info@techpathwaysinitiative.org?subject=Sponsorship%20Packet%20Request"
            >
              Request Sponsorship Packet
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
