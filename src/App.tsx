import "./App.css";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import logo from "./images/tech-pathways-initiative-logo-black-background.png";
import { donationUrl } from "./donation";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { GetInvolvedPage } from "./pages/GetInvolvedPage";
import { GovernancePage } from "./pages/GovernancePage";
import { HomePage } from "./pages/HomePage";
import { ImpactPage } from "./pages/ImpactPage";
import { NewsPage } from "./pages/NewsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PartnersSponsorsPage } from "./pages/PartnersSponsorsPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { StudentsParentsPage } from "./pages/StudentsParentsPage";

const defaultSiteUrl = "https://www.techpathwaysinitiative.org";
const siteUrl = import.meta.env.VITE_SITE_URL ?? defaultSiteUrl;
const ogImageUrl = `${siteUrl}/og-tech-pathways-initiative-cleveland.png`;
const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const searchConsoleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Tech Pathways Initiative | Technology Education for Cleveland Youth",
    description:
      "Tech Pathways Initiative equips youth in underserved Greater Cleveland communities with technical education, caring mentorship, career exposure, and professional skills that prepare them for rewarding careers in technology.",
  },
  "/about": {
    title: "About Us | Tech Pathways Initiative",
    description:
      "Learn why Tech Pathways Initiative was founded to serve youth in underserved Cleveland, Greater Cleveland, and Northeast Ohio communities through technology opportunity.",
  },
  "/programs": {
    title: "Programs in Development | Tech Pathways Initiative",
    description:
      "Explore Tech Pathways Initiative programs in development, including eligibility, expected outcomes, and pilot opportunities for Cleveland and Northeast Ohio students.",
  },
  "/get-involved": {
    title: "Get Involved | Tech Pathways Initiative",
    description:
      "Become a mentor, volunteer, sponsor, or partner with Tech Pathways Initiative to expand technology pathways for youth across Greater Cleveland and Northeast Ohio.",
  },
  "/students-parents": {
    title: "Students & Parents | Tech Pathways Initiative",
    description:
      "Find student eligibility, safety practices, registration details, and FAQs for families interested in Tech Pathways Initiative opportunities in Greater Cleveland.",
  },
  "/partners-sponsors": {
    title: "Partners & Sponsors | Tech Pathways Initiative",
    description:
      "Discover sponsorship levels, partnership opportunities, and in-kind support options for organizations investing in Cleveland youth technology pathways.",
  },
  "/impact": {
    title: "Impact Goals | Tech Pathways Initiative",
    description:
      "Review first-year goals for student engagement, mentorship, and school-community partnerships led by Tech Pathways Initiative in Greater Cleveland.",
  },
  "/news": {
    title: "News & Resources | Tech Pathways Initiative",
    description:
      "Read updates, student opportunity highlights, and community technology resources from Tech Pathways Initiative serving Cleveland and Northeast Ohio.",
  },
  "/contact": {
    title: "Contact | Tech Pathways Initiative",
    description:
      "Contact Tech Pathways Initiative for student and parent interest, mentoring, volunteering, partnerships, sponsorship, and media inquiries in Greater Cleveland.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NonProfit",
  name: "Tech Pathways Initiative",
  url: siteUrl,
  logo: ogImageUrl,
  email: "info@techpathwaysinitiative.org",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cleveland",
    addressRegion: "OH",
    addressCountry: "US",
  },
  areaServed: ["Cleveland", "Greater Cleveland", "Northeast Ohio"],
  sameAs: [
    "https://www.linkedin.com/company/tech-pathways-initiaitve",
    "https://www.facebook.com/profile.php?id=61593123514261",
    "https://www.instagram.com/tech_pathways_initiative/",
    "https://twitter.com/techpathwaysinit",
  ],
};

function upsertMeta(selector: string, content: string, attribute: "name" | "property") {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${selector}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, selector);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const metadata = routeMeta[location.pathname] ?? {
      title: "Page Not Found | Tech Pathways Initiative",
      description:
        "The requested page could not be found. Explore Tech Pathways Initiative resources for students, families, and partners in Greater Cleveland.",
    };
    const canonicalUrl = `${siteUrl}${location.pathname}`;
    const isKnownRoute = Boolean(routeMeta[location.pathname]);

    document.title = metadata.title;
    upsertMeta("description", metadata.description, "name");
    upsertMeta("robots", isKnownRoute ? "index, follow" : "noindex, follow", "name");
    upsertMeta("og:title", metadata.title, "property");
    upsertMeta("og:description", metadata.description, "property");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:url", canonicalUrl, "property");
    upsertMeta("og:image", ogImageUrl, "property");
    upsertMeta("twitter:card", "summary_large_image", "name");
    upsertMeta("twitter:title", metadata.title, "name");
    upsertMeta("twitter:description", metadata.description, "name");
    upsertMeta("twitter:image", ogImageUrl, "name");

    if (searchConsoleVerification) {
      upsertMeta("google-site-verification", searchConsoleVerification, "name");
    }

    let canonical = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    let schemaTag = document.getElementById("organization-structured-data");
    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.setAttribute("id", "organization-structured-data");
      schemaTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaTag);
    }
    schemaTag.textContent = JSON.stringify(organizationSchema);
  }, [location.pathname]);

  return null;
}

function AnalyticsManager() {
  const location = useLocation();

  useEffect(() => {
    if (gaMeasurementId && !document.getElementById("ga-script")) {
      const gaScript = document.createElement("script");
      gaScript.id = "ga-script";
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
      document.head.appendChild(gaScript);

      const gaConfig = document.createElement("script");
      gaConfig.id = "ga-config";
      gaConfig.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${gaMeasurementId}', { send_page_view: false });
      `;
      document.head.appendChild(gaConfig);
    }

    if (!gaMeasurementId && plausibleDomain && !document.getElementById("plausible-script")) {
      const plausibleScript = document.createElement("script");
      plausibleScript.id = "plausible-script";
      plausibleScript.defer = true;
      plausibleScript.setAttribute("data-domain", plausibleDomain);
      plausibleScript.src = "https://plausible.io/js/script.js";
      document.head.appendChild(plausibleScript);
    }
  }, []);

  useEffect(() => {
    if (!gaMeasurementId) {
      return;
    }

    const windowWithGtag = window as Window & {
      gtag?: (command: string, id: string, options?: Record<string, string>) => void;
    };
    if (windowWithGtag.gtag) {
      windowWithGtag.gtag("config", gaMeasurementId, {
        page_path: `${location.pathname}${location.search}`,
      });
    }
  }, [location.pathname, location.search]);

  return null;
}

const moreLinks = [
  { to: "/students-parents", label: "Students & Parents" },
  { to: "/partners-sponsors", label: "Partners & Sponsors" },
  { to: "/impact", label: "Impact" },
  { to: "/news", label: "News & Resources" },
  { to: "/contact", label: "Contact" },
];

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return null;
}

function SiteHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={menuOpen ? "site-header site-header-menu-open" : "site-header"}>
      <Link className="brand" to="/" aria-label="Tech Pathways Initiative home">
        <img className="brand-logo-full" src={logo} alt="Tech Pathways Initiative logo" />
        <span className="brand-name sr-only">Tech Pathways Initiative</span>
      </Link>

      <button
        className="mobile-menu-button"
        type="button"
        aria-controls="site-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="mobile-menu-icon" aria-hidden="true">☰</span>
        Menu
      </button>

      <nav
        id="site-navigation"
        className={menuOpen ? "site-nav site-nav-open" : "site-nav"}
        aria-label="Main"
      >
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/get-involved">Get Involved</NavLink>

        <div className="nav-more-wrapper" ref={moreRef}>
          <button
            className="nav-more-btn"
            type="button"
            aria-haspopup="menu"
            aria-expanded={moreOpen}
            onClick={() => setMoreOpen((open) => !open)}
          >
            More
            <span className="nav-more-caret" aria-hidden="true">
              {moreOpen ? "▲" : "▼"}
            </span>
          </button>
          {moreOpen && (
            <div className="nav-dropdown" role="menu">
              {moreLinks.map((link) => (
                <NavLink key={link.to} to={link.to} role="menuitem">
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <a className="nav-donate" href={donationUrl} target="_blank" rel="noopener noreferrer">
          Donate
        </a>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-layout">
        <div className="footer-brand-block">
          <img className="footer-logo" src={logo} alt="Tech Pathways Initiative logo" />
          <h2>Tech Pathways Initiative</h2>
          <p>
            Tech Pathways Initiative is a Cleveland-based nonprofit organization creating pathways
            into technology careers for youth in underserved communities.
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Tech Pathways Initiative. All rights reserved.
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/students-parents">Students &amp; Parents</Link></li>
            <li><Link to="/partners-sponsors">Partners &amp; Sponsors</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/news">News &amp; Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p>
            <a href="mailto:info@techpathwaysinitiative.org">
              info@techpathwaysinitiative.org
            </a>
          </p>
          <p>Greater Cleveland, Ohio</p>
          <p>Response time: 3 to 5 business days</p>

          <h3>Social Links</h3>
          <ul>
            <li><a href="https://www.linkedin.com/company/tech-pathways-initiaitve" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61593123514261" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/tech_pathways_initiative/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/techpathwaysinit" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
          </ul>

          <h3>Policies</h3>
          <ul>
            <li>
              <a href="mailto:info@techpathwaysinitiative.org?subject=Privacy%20Policy%20Request">
                Privacy Policy (Coming Soon)
              </a>
            </li>
            <li>
              <a href="mailto:info@techpathwaysinitiative.org?subject=Accessibility%20Statement%20Request">
                Accessibility Statement (Coming Soon)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function AppShell() {
  return (
    <div className="landing-page">
      <SeoManager />
      <AnalyticsManager />
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/governance" element={<GovernancePage />} />
        <Route path="/students-parents" element={<StudentsParentsPage />} />
        <Route path="/partners-sponsors" element={<PartnersSponsorsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;


