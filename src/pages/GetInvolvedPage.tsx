import { useState, type FormEvent } from "react";
import { getInvolvedOptions } from "../siteContent";

export function GetInvolvedPage() {
  const [submittedOptions, setSubmittedOptions] = useState<Record<string, boolean>>({});

  const handleInterestSubmit =
    (optionId: string) => (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmittedOptions((current) => ({ ...current, [optionId]: true }));
      event.currentTarget.reset();
    };

  return (
    <main>
      <section className="inner-hero-section">
        <div className="inner-hero-layout">
          <div className="inner-hero-copy">
            <p className="eyebrow">Get Involved</p>
            <h1>Choose the way you want to help build technology pathways.</h1>
            <p className="hero-description">
              Tech Pathways Initiative offers multiple ways for individuals, schools, employers,
              and organizations to support students. Each pathway below includes its own interest
              form so you can connect with us based on how you want to contribute.
            </p>
          </div>
          <div className="program-status-card">
            <h2>Distinct participation pathways</h2>
            <p>
              Whether you want to mentor, volunteer, partner, host an experience, sponsor, donate
              equipment, or support financially, there is a dedicated way to get involved.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Participation Options</p>
          <h2>Choose the pathway that best fits your role, resources, or interests.</h2>
        </div>
        <div className="involvement-grid">
          {getInvolvedOptions.map((option) => (
            <article key={option.id} className="involvement-card">
              <div className="involvement-copy">
                <p className="section-label">{option.title}</p>
                <h3>{option.shortDescription}</h3>
                <p>{option.fullDescription}</p>
                <p className="form-helper-text">{option.formPrompt}</p>
              </div>
              <form className="interest-form" onSubmit={handleInterestSubmit(option.id)}>
                <label>
                  Full Name
                  <input type="text" name={`${option.id}-name`} placeholder="Your name" required />
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    name={`${option.id}-email`}
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label>
                  Organization or Company
                  <input
                    type="text"
                    name={`${option.id}-organization`}
                    placeholder="Optional"
                  />
                </label>
                <label>
                  Message
                  <textarea
                    name={`${option.id}-message`}
                    rows={4}
                    placeholder="Tell us more about your interest."
                    required
                  />
                </label>
                <button className="button button-primary" type="submit">
                  {option.submitLabel}
                </button>
                {submittedOptions[option.id] && (
                  <p className="form-success" role="status">
                    Thank you! We received your interest and will follow up soon.
                  </p>
                )}
              </form>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
