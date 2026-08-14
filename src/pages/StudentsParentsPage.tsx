import { useState, type FormEvent } from "react";
import { sendFormAsEmail } from "../formEmail";

const faqs = [
  {
    question: "Do students need prior technology experience to participate?",
    answer:
      "No prior experience is required. Programs are designed to meet students where they are. Beginner-friendly learning is central to every planned program track.",
  },
  {
    question: "Is there a cost for students to participate?",
    answer:
      "All planned Tech Pathways Initiative programs are designed to be free for participating students. Details will be confirmed as pilot programs launch.",
  },
  {
    question: "What ages or grade levels are served?",
    answer:
      "Programs are primarily designed for middle school, high school, and early postsecondary students. Specific grade requirements will vary by program track.",
  },
  {
    question: "Where will programs take place?",
    answer:
      "Programs are planned to be hosted at partner school sites and community locations in Greater Cleveland. Specific sites will be announced before each pilot cohort.",
  },
  {
    question: "Will transportation be provided?",
    answer:
      "Transportation planning is part of program development. We are working to ensure access is not a barrier. Guidance will be provided before program launch.",
  },
  {
    question: "What technology will students need?",
    answer:
      "Technology will be provided during program activities. Students are not expected to bring personal devices. Details about any take-home technology will be shared in enrollment materials.",
  },
  {
    question: "How will students be supervised?",
    answer:
      "All program activities will be staffed by program facilitators and approved volunteers. Student safety and supervision practices will be documented and shared with families before programs begin.",
  },
  {
    question: "Will photographs or videos be taken of students?",
    answer:
      "Photo and media consent will be required before any images of students are captured. Families will receive a consent form as part of the enrollment process. No student will be photographed without written permission.",
  },
  {
    question: "How do I register my student?",
    answer:
      "Registration will open once pilot cohorts are scheduled. Add your student to the interest list now and we will notify you when registration becomes available.",
  },
  {
    question: "How can I stay informed about upcoming programs?",
    answer:
      "Join the newsletter and program update list to receive announcements about cohort dates, locations, and enrollment openings.",
  },
];

export function StudentsParentsPage() {
  const [interestSubmitted, setInterestSubmitted] = useState(false);
  const [updatesSubmitted, setUpdatesSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInterestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendFormAsEmail("Student Interest Form", event);
    setInterestSubmitted(true);
    event.currentTarget.reset();
  };

  const handleUpdatesSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendFormAsEmail("Program Updates Signup", event);
    setUpdatesSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">Students &amp; Parents</p>
            <h1>
              Help your student explore what is possible through technology.
            </h1>
            <p className="hero-description">
              Tech Pathways Initiative is developing programs specifically for
              youth in Greater Cleveland who are ready to explore technology
              education, mentorship, and career pathways. Programs are not yet
              launched, but you can get on the list now.
            </p>
          </div>
          <div className="program-status-card">
            <h2>Be the first to know.</h2>
            <p>
              Programs are currently in development. Join the interest list and
              we will reach out when enrollment opens in your area.
            </p>
            <div className="hero-actions">
              <a className="button button-secondary" href="#interest-list">
                Join the Student Interest List
              </a>
              <a className="button button-secondary" href="#program-updates">
                Receive Program Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Program Overview</p>
          <h2>
            What students can expect from Tech Pathways Initiative programs.
          </h2>
          <p>
            Programs are being designed with safety, access, and student
            experience as priorities. Below is what families should know as
            pilots take shape.
          </p>
        </div>
        <div className="info-cards-grid">
          <article className="info-tile">
            <h3>Who is eligible?</h3>
            <p>
              Youth in underserved Greater Cleveland communities, primarily in
              middle school, high school, and early postsecondary settings.
            </p>
          </article>
          <article className="info-tile">
            <h3>Age and grade range</h3>
            <p>
              Primarily grades 6 through 12 and early college students. Some
              programs may have specific grade-level requirements depending on
              the track.
            </p>
          </article>
          <article className="info-tile">
            <h3>Program dates and locations</h3>
            <p>
              Dates and partner site locations will be announced as pilot
              cohorts are confirmed. Most programming is planned for Greater
              Cleveland.
            </p>
          </article>
          <article className="info-tile">
            <h3>Safety and supervision</h3>
            <p>
              All activities will be staffed by trained facilitators.
              Supervision practices will be documented and shared with families
              before any program begins.
            </p>
          </article>
          <article className="info-tile">
            <h3>Transportation and technology</h3>
            <p>
              Technology will be provided on-site during activities.
              Transportation guidance will be included with each program's
              enrollment details.
            </p>
          </article>
          <article className="info-tile">
            <h3>Cost to families</h3>
            <p>
              All programs are planned to be free for eligible students. There
              will be no participation fee required of families.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Registration Process</p>
          <h2>How families will register when programs are ready to launch.</h2>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <span className="step-number">1</span>
            <div>
              <h3>Join the interest list</h3>
              <p>
                Add your student's name and your contact information so we can
                reach you when enrollment opens near you.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span className="step-number">2</span>
            <div>
              <h3>Receive enrollment information</h3>
              <p>
                You will receive details about the specific program, location,
                dates, and cohort requirements before registration opens.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span className="step-number">3</span>
            <div>
              <h3>Complete registration and consent forms</h3>
              <p>
                Registration will include contact information, grade level, and
                signed consent forms covering photo and media permission and
                program participation.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span className="step-number">4</span>
            <div>
              <h3>Attend orientation</h3>
              <p>
                Families and students will be invited to an orientation before
                the program begins so everyone understands expectations,
                schedules, and supervision practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Photo and Media Consent</p>
          <h2>We take student privacy and family consent seriously.</h2>
          <p>
            No student will be photographed, recorded, or featured in any Tech
            Pathways Initiative materials without prior written consent from a
            parent or guardian. Consent forms will be included in every
            program's enrollment package and can be withdrawn at any time.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <p className="section-label">Parent FAQs</p>
          <h2>
            Common questions from families considering Tech Pathways Initiative.
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article key={faq.question} className="faq-item">
              <button
                className="faq-question"
                aria-expanded={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.question}
                <span className="faq-icon" aria-hidden="true">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && <p className="faq-answer">{faq.answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="interest-list" className="section">
        <div className="dual-form-layout">
          <div className="dual-form-panel">
            <p className="section-label">Student Interest List</p>
            <h2>Join the list. Be first to know when enrollment opens.</h2>
            <form className="interest-form" onSubmit={handleInterestSubmit}>
              <label>
                Parent or Guardian Name
                <input
                  type="text"
                  name="parent-name"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label>
                Student First Name
                <input
                  type="text"
                  name="student-name"
                  placeholder="Student's first name"
                  required
                />
              </label>
              <label>
                Student Grade Level
                <input
                  type="text"
                  name="grade"
                  placeholder="e.g. 7th grade or 10th grade"
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="Optional" />
              </label>
              <button className="button button-primary" type="submit">
                Join the Student Interest List
              </button>
              {interestSubmitted && (
                <p className="form-success" role="status">
                  You are on the list. We will contact you when enrollment opens
                  near you.
                </p>
              )}
            </form>
          </div>

          <div id="program-updates" className="dual-form-panel">
            <p className="section-label">Program Updates</p>
            <h2>
              Stay informed about new programs, dates, and cohort openings.
            </h2>
            <form className="interest-form" onSubmit={handleUpdatesSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="updates-name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="updates-email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                I am a
                <select name="role">
                  <option value="">Select one</option>
                  <option value="parent">Parent or Guardian</option>
                  <option value="student">Student</option>
                  <option value="educator">Educator</option>
                  <option value="community">Community Member</option>
                </select>
              </label>
              <button className="button button-primary" type="submit">
                Receive Program Updates
              </button>
              {updatesSubmitted && (
                <p className="form-success" role="status">
                  You are subscribed. We will keep you updated on program news.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="contact-info-bar">
          <div>
            <p className="section-label">Contact</p>
            <h2>Questions? Reach out directly.</h2>
          </div>
          <div className="contact-info-list">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@techpathwaysinitiative.org">
                info@techpathwaysinitiative.org
              </a>
            </p>
            <p>
              <strong>Location:</strong> Greater Cleveland, Ohio
            </p>
            <p>
              <strong>Response time:</strong> We aim to respond to all inquiries
              within 3 to 5 business days.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
