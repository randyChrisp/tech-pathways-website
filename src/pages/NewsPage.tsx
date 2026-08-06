const categories = [
  "All Updates",
  "Upcoming Events",
  "Technology Careers",
  "Student Projects",
  "Scholarships",
  "Parent Resources",
  "Partner News",
  "Cleveland Opportunities",
];

const placeholderArticles = [
  {
    slug: "welcome-to-tpi",
    category: "All Updates",
    date: "Coming soon",
    title: "Tech Pathways Initiative: Building Student Pathways from the Ground Up",
    summary:
      "An introduction to Tech Pathways Initiative, our founding mission, the communities we intend to serve, and what you can expect as we prepare to launch programs in Greater Cleveland.",
  },
  {
    slug: "why-early-exposure-matters",
    category: "Technology Careers",
    date: "Coming soon",
    title: "Why Early Technology Exposure Can Change the Direction of a Career",
    summary:
      "Research, practitioner insights, and real-world examples that explain why introducing students to technology pathways in middle and early high school is a critical window for long-term career outcomes.",
  },
  {
    slug: "pilot-partner-invitation",
    category: "Partner News",
    date: "Coming soon",
    title: "Invitation to Schools and Organizations: Become a Pilot Program Partner",
    summary:
      "Tech Pathways Initiative is actively seeking schools, youth organizations, and community partners in Greater Cleveland to collaborate on pilot program design, student enrollment, and site hosting.",
  },
  {
    slug: "parent-digital-resources",
    category: "Parent Resources",
    date: "Coming soon",
    title: "Technology Resources for Families: Supporting Your Student at Home",
    summary:
      "A curated collection of free online learning tools, safety guides, and career awareness resources that parents and guardians can use to extend student learning outside of structured programs.",
  },
  {
    slug: "cleveland-tech-opportunities",
    category: "Cleveland Opportunities",
    date: "Coming soon",
    title: "Technology Career Opportunities in Greater Cleveland: What Students Should Know",
    summary:
      "An overview of growing technology sectors, employers, and educational pathways available to students in the Greater Cleveland area.",
  },
];

export function NewsPage() {
  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">News &amp; Resources</p>
            <h1>Updates, insights, and resources from Tech Pathways Initiative.</h1>
            <p className="hero-description">
              As Tech Pathways Initiative grows, this page will publish program updates, student
              stories, technology career profiles, partner announcements, and resources for
              families and communities. The articles below represent upcoming topics.
            </p>
          </div>
          <div className="program-status-card">
            <h2>Content in development.</h2>
            <p>
              Subscribe to receive updates when articles, event announcements, and resources are
              published.
            </p>
            <a
              className="button button-secondary"
              href="#news-subscribe"
            >
              Subscribe for Updates
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Topics We Will Cover</p>
          <h2>Content will span programs, careers, students, and the Greater Cleveland community.</h2>
        </div>
        <div className="category-pills" aria-label="News categories">
          {categories.map((cat) => (
            <span key={cat} className="category-pill">
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Upcoming Articles</p>
          <h2>Articles being planned and written for this section.</h2>
          <p>
            These topics reflect planned content. Articles will be marked as published when
            completed.
          </p>
        </div>
        <div className="news-grid">
          {placeholderArticles.map((article) => (
            <article key={article.slug} className="news-card">
              <div className="news-card-meta">
                <span className="news-category">{article.category}</span>
                <span className="news-date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <span className="news-status">In development</span>
            </article>
          ))}
        </div>
      </section>

      <section id="news-subscribe" className="section">
        <div className="newsletter-layout">
          <div>
            <p className="section-label">Stay Informed</p>
            <h2>Get notified when new content, events, and program updates are published.</h2>
            <p>
              Whether you are a student, parent, educator, mentor, or community member, our
              newsletter will keep you connected to what is happening at Tech Pathways Initiative.
            </p>
          </div>
          <NewsSubscribeForm />
        </div>
      </section>
    </main>
  );
}

import { useState, type FormEvent } from "react";

function NewsSubscribeForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label>
        Full Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label htmlFor="news-email">Email Address</label>
      <input
        id="news-email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
      />
      <label>
        I am primarily interested in
        <select name="interest">
          <option value="">Select one (optional)</option>
          <option value="programs">Program announcements</option>
          <option value="careers">Technology career content</option>
          <option value="parent-resources">Parent and family resources</option>
          <option value="partnerships">Partner and sponsor news</option>
          <option value="all">All updates</option>
        </select>
      </label>
      <button className="button button-primary" type="submit">
        Subscribe
      </button>
      {submitted && (
        <p className="form-success" role="status">
          You are subscribed. We will notify you when new content is published.
        </p>
      )}
    </form>
  );
}
