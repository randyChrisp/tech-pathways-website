import careerPathwaysImage from "./images/career-pathways.jpg";
import codingOfficeImage from "./images/it-careers-office.jpg";
import exposureImage from "./images/exposure-section.jpg";
import heroStemProjectImage from "./images/hero-stem-project.jpg";
import mentorshipCardImage from "./images/mentorship-card.jpg";
import volunteerCollaborationImage from "./images/volunteer-collaboration.jpg";

export const primaryMissionStatement =
  "To empower youth in underserved communities through technology education, mentorship, career exposure, and workforce development opportunities that create pathways into high-paying technology careers.";

export const missionStatement =
  "Tech Pathways Initiative empowers youth in underserved Greater Cleveland communities through technology education, mentorship, career exposure, and workforce development-creating pathways to high-paying technology careers.";
export const heroCopy =
  "Tech Pathways Initiative equips youth in underserved Greater Cleveland communities with technical education, caring mentorship, career exposure, and professional skills that prepare them for rewarding careers in technology.";

export const visionStatement =
  "We envision a future where every young person-regardless of income, neighborhood, or background-has access to the education, guidance, and opportunities needed to succeed in the technology workforce.";

export const pathwaySteps = [
  {
    phase: "Exposure",
    title: "Students discover the range of opportunities in technology.",
    description:
      "Students discover the range of opportunities available across software development, cybersecurity, cloud computing, data, technical support, artificial intelligence, and other technology fields.",
    image: exposureImage,
    alt: "Students collaborating on a hands-on technology project.",
  },
  {
    phase: "Education",
    title: "Hands-on workshops build practical skills.",
    description:
      "Hands-on workshops help students build digital literacy, coding, problem-solving, teamwork, and project-development skills.",
    image: heroStemProjectImage,
    alt: "Children collaborating on a STEM project with a laptop and 3D printer.",
  },
  {
    phase: "Mentorship",
    title: "Students connect with experienced professionals.",
    description:
      "Students connect with technology professionals who provide encouragement, career insight, accountability, and guidance.",
    image: mentorshipCardImage,
    alt: "An adult mentor helping two students with their work at a table.",
  },
  {
    phase: "Career Preparation",
    title: "Participants prepare for next-step opportunities.",
    description:
      "Participants learn how to build resumes and portfolios, prepare for interviews, pursue certifications, and identify internships, college programs, and entry-level career pathways.",
    image: careerPathwaysImage,
    alt: "Three women collaborating around a computer in a professional environment.",
  },
];

export const featuredPrograms = [
  {
    title: "Tech Discovery",
    description:
      "Planned introductory experiences to expose students to technology careers through demonstrations and guest speakers.",
    image: exposureImage,
    alt: "Students collaborating on a hands-on technology project.",
  },
  {
    title: "Digital Foundations",
    description:
      "Planned digital literacy pathway focused on computer basics, online safety, and productivity tools.",
    image: mentorshipCardImage,
    alt: "An adult mentor helping two students with their work at a table.",
  },
  {
    title: "Code Forward",
    description:
      "Planned coding fundamentals pathway introducing HTML, CSS, JavaScript, and project-based learning.",
    image: codingOfficeImage,
    alt: "Technology professional coding in an office environment.",
  },
];

export const impactGoals = [
  { label: "Students reached annually", value: "250+" },
  { label: "Mentor connections each year", value: "100+" },
  { label: "Career exploration sessions", value: "40+" },
  { label: "Paid internship pathways", value: "25+" },
];

export const participationWays = [
  {
    title: "Volunteer",
    description: "Lead workshops, tutor students, or support events that expand access to technology.",
    cta: "Volunteer Interest",
    href: "mailto:info@techpathwaysinitiative.org?subject=Volunteer%20Interest",
  },
  {
    title: "Mentor",
    description: "Share your story and guidance to help students build confidence in tech pathways.",
    cta: "Become a Mentor",
    href: "mailto:info@techpathwaysinitiative.org?subject=Mentor%20Application",
  },
  {
    title: "Partner",
    description: "Collaborate as a school, employer, or community organization to deepen student impact.",
    cta: "Partner With Us",
    href: "mailto:info@techpathwaysinitiative.org?subject=Partnership%20Inquiry",
  },
];

export type GetInvolvedOption = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  formPrompt: string;
  submitLabel: string;
};

export const getInvolvedOptions: GetInvolvedOption[] = [
  {
    id: "mentor",
    title: "Become a Mentor",
    shortDescription:
      "Support students through guidance, encouragement, and exposure to real technology career paths.",
    fullDescription:
      "Mentors can help students build confidence, set goals, ask bigger questions, and better understand what it takes to grow into a technology career.",
    formPrompt:
      "Share your background, availability, and the age groups or topics you would be most interested in supporting.",
    submitLabel: "Submit Mentor Interest",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    shortDescription:
      "Contribute time and talent to events, workshops, logistics, and student support activities.",
    fullDescription:
      "Volunteers help strengthen the student experience through event support, classroom assistance, project coaching, and community engagement.",
    formPrompt:
      "Tell us how you would like to volunteer, what skills you can offer, and when you are typically available.",
    submitLabel: "Submit Volunteer Interest",
  },
  {
    id: "partner",
    title: "Partner With Us",
    shortDescription:
      "Collaborate as a school, employer, community organization, or technology professional.",
    fullDescription:
      "Partner with Tech Pathways Initiative to help students experience technology beyond the classroom. Schools, employers, community organizations, and technology professionals can contribute through workshops, workplace tours, mentoring, equipment, internships, and financial sponsorship.",
    formPrompt:
      "Let us know what type of organization you represent and how you would like to partner.",
    submitLabel: "Submit Partnership Interest",
  },
  {
    id: "career-experience",
    title: "Host a Career Experience",
    shortDescription:
      "Create meaningful exposure through workplace visits, demonstrations, shadowing, or guest sessions.",
    fullDescription:
      "Career experiences help students connect classroom learning to the real world by showing them what technology roles, teams, and work environments can look like.",
    formPrompt:
      "Describe the type of experience you can host, your location, and any age group preferences.",
    submitLabel: "Submit Career Experience Interest",
  },
  {
    id: "sponsor",
    title: "Sponsor a Program",
    shortDescription:
      "Help fund future student programming, pilot cohorts, learning materials, and workforce preparation.",
    fullDescription:
      "Program sponsors can expand access by helping cover instructional costs, student resources, special events, transportation, and program development needs.",
    formPrompt:
      "Share your sponsorship goals, preferred support area, and whether you represent an individual, business, or organization.",
    submitLabel: "Submit Sponsorship Interest",
  },
  {
    id: "equipment",
    title: "Donate Equipment",
    shortDescription:
      "Provide technology and learning tools that help students participate with confidence.",
    fullDescription:
      "Equipment donors can support access by contributing laptops, monitors, peripherals, learning tools, or other technology resources appropriate for student use.",
    formPrompt:
      "Tell us what equipment you would like to donate, approximate quantities, and whether pickup or delivery is possible.",
    submitLabel: "Submit Equipment Donation Interest",
  },
  {
    id: "financial-support",
    title: "Support Financially",
    shortDescription:
      "Invest financially in long-term student pathways, pilot programming, and technology opportunity.",
    fullDescription:
      "Financial supporters help make workshops, mentoring, career exposure, and workforce development more accessible for students in underserved communities.",
    formPrompt:
      "Let us know whether you are interested in one-time giving, recurring support, or a larger funding conversation.",
    submitLabel: "Submit Financial Support Interest",
  },
];

export const supporterLogos = [
  "Greater Cleveland Community Partners",
  "Future Tech Employers Network",
  "Northeast Ohio Education Collaborative",
  "Digital Workforce Alliance",
];

export type ProgramDevelopmentDetail = {
  name: string;
  purpose: string;
  possibleActivities: string;
  targetGroup: string;
  schedule: string;
  expectedOutcomes: string;
  participationInstructions: string;
  eligibility: string;
  studentLearning: string;
  duration: string;
  freeOrPaid: string;
  location: string;
  technologyProvided: string;
  parentRegistration: string;
  nextCohort: string;
};

export const programsInDevelopment: ProgramDevelopmentDetail[] = [
  {
    name: "Tech Discovery",
    purpose: "Introduce students to technology careers.",
    possibleActivities: "Career demonstrations, guest speakers, workplace tours.",
    targetGroup: "Middle and high school students beginning their technology journey.",
    schedule: "Planned as after-school sessions and Saturday events in pilot cycles.",
    expectedOutcomes:
      "Students can identify technology career pathways and understand how school skills connect to those pathways.",
    participationInstructions:
      "Schools and organizations can request pilot participation by emailing the Tech Pathways team.",
    eligibility: "Youth in underserved Greater Cleveland communities through partner schools and organizations.",
    studentLearning:
      "Career awareness, technology vocabulary, and confidence discussing future opportunities.",
    duration: "Planned 6 to 8 week pilot cycle.",
    freeOrPaid: "Planned as a free program for participating students.",
    location: "Partner school sites, community spaces, and selected workplace visit locations.",
    technologyProvided:
      "Demonstration equipment and guided access to devices during program activities.",
    parentRegistration:
      "Parent or guardian registration process will open after pilot partner schedules are confirmed.",
    nextCohort: "Programs in Development. Pilot start dates to be announced.",
  },
  {
    name: "Digital Foundations",
    purpose: "Build essential technical skills.",
    possibleActivities: "Computer literacy, internet safety, productivity tools.",
    targetGroup: "Upper elementary through high school students needing foundational digital skills.",
    schedule: "Planned as weekly classroom-style workshops in partner locations.",
    expectedOutcomes:
      "Students strengthen digital confidence and build practical day-to-day technology skills.",
    participationInstructions:
      "Community organizations and schools can join the pilot interest list for launch planning.",
    eligibility: "Youth participants referred through schools, families, and community partners.",
    studentLearning:
      "Computer basics, online safety habits, productivity tools, and digital communication skills.",
    duration: "Planned 8 to 10 week learning track.",
    freeOrPaid: "Planned as a free program for families.",
    location: "School labs, community learning centers, and approved partner sites.",
    technologyProvided: "Program devices, instructional software, and supervised internet access.",
    parentRegistration:
      "Registration details will be released with pilot partner announcements and program calendars.",
    nextCohort: "Programs in Development. Pilot launch timeline pending partner onboarding.",
  },
  {
    name: "Code Forward",
    purpose: "Teach software development fundamentals.",
    possibleActivities: "HTML, CSS, JavaScript, app and website projects.",
    targetGroup: "Middle and high school students interested in coding and project-based learning.",
    schedule: "Planned as semester-style cohorts with weekly sessions and project showcases.",
    expectedOutcomes:
      "Students build foundational coding skills and complete portfolio-ready web and app projects.",
    participationInstructions:
      "Schools and youth organizations can apply to host pilot cohorts in collaboration with Tech Pathways.",
    eligibility:
      "Students in target age groups who are ready for beginner-level coding instruction and support.",
    studentLearning:
      "Front-end coding basics, problem solving, project collaboration, and presentation skills.",
    duration: "Planned 10 to 12 week cohort model.",
    freeOrPaid: "Planned as a free instructional pathway for accepted students.",
    location: "Partner classrooms, innovation labs, and approved community technology spaces.",
    technologyProvided:
      "Laptop access, coding platforms, and guided project tools during instructional sessions.",
    parentRegistration:
      "Family registration information will be shared once pilot cohorts and host sites are confirmed.",
    nextCohort: "Programs in Development. Cohort dates will be posted after pilot setup.",
  },
  {
    name: "Pathways Mentoring",
    purpose: "Connect students with technology professionals.",
    possibleActivities: "Monthly mentoring, goal-setting, career guidance.",
    targetGroup: "Middle school, high school, and early postsecondary students seeking guidance.",
    schedule: "Planned as recurring monthly mentoring sessions with ongoing check-ins.",
    expectedOutcomes:
      "Students gain support networks, clearer goals, and stronger confidence navigating education and career decisions.",
    participationInstructions:
      "Mentors, schools, and youth organizations can join the pilot partner process through direct outreach.",
    eligibility:
      "Students referred through partner schools and organizations, matched based on goals and interests.",
    studentLearning:
      "Goal-setting habits, professional communication, and understanding of technology career pathways.",
    duration: "Planned as a multi-month mentorship cycle with periodic milestone reviews.",
    freeOrPaid: "Planned as a free mentorship offering.",
    location: "Hybrid model under development, including in-person partner sites and virtual meetings.",
    technologyProvided: "Program-supported communication tools and shared learning resources.",
    parentRegistration:
      "Parent and guardian consent workflow will be included when pilot implementation details are finalized.",
    nextCohort: "Programs in Development. Pilot mentor matching timeline to be announced.",
  },
  {
    name: "Career Launch",
    purpose: "Prepare older students for employment.",
    possibleActivities: "Resumes, interviews, portfolios, internships, certifications.",
    targetGroup:
      "High school juniors, seniors, and early postsecondary learners preparing for workforce entry.",
    schedule: "Planned as intensive workshops plus coaching sessions tied to internship windows.",
    expectedOutcomes:
      "Students leave with career-ready materials, stronger interviewing skills, and clearer workforce pathways.",
    participationInstructions:
      "Employers, schools, and organizations are invited to become pilot partners for placement and mentoring support.",
    eligibility:
      "Older youth and early postsecondary students ready for internship and early career preparation.",
    studentLearning:
      "Resume building, portfolio development, interview preparation, and workplace professionalism.",
    duration: "Planned 8 to 12 week readiness cycle.",
    freeOrPaid: "Planned as a free readiness program for accepted participants.",
    location:
      "Community partner sites, school career centers, and employer-partner locations for exposure activities.",
    technologyProvided:
      "Access to portfolio tools, resume resources, and interview preparation technology.",
    parentRegistration:
      "Registration and enrollment guidance will be published as pilot schedules and partner sites are finalized.",
    nextCohort: "Programs in Development. Launch dates dependent on pilot partner commitments.",
  },
];

export const aboutStory = [
  "Tech Pathways Initiative was established to help close the technology opportunity gap by providing young people in underserved communities with access to technical education, professional mentors, career exploration, and workforce preparation.",
  "The organization exists to create earlier access to exposure, skills-building, mentorship, and workforce preparation so that students can move from curiosity to confidence and from confidence to career readiness.",
];

export const coreValues = [
  "Access",
  "Representation",
  "Opportunity",
  "Innovation",
  "Mentorship",
  "Community",
  "Accountability",
];

export const communitiesServed = [
  {
    title: "Communities Served",
    description:
      "Youth in underserved Greater Cleveland neighborhoods and partner school communities.",
  },
  {
    title: "Age Groups",
    description:
      "Primarily middle school, high school, and early postsecondary students exploring pathways into technology.",
  },
  {
    title: "Program Focus",
    description:
      "Students seeking technology exposure, workforce skills, mentorship, and long-term career direction.",
  },
];

export const boardRoles = [
  {
    title: "Board Chair",
    description: "Leadership and governance guidance for organizational growth and community accountability.",
  },
  {
    title: "Treasurer",
    description: "Financial oversight, stewardship planning, and support for sustainable nonprofit operations.",
  },
  {
    title: "Secretary",
    description: "Governance records, policy support, and board process coordination.",
  },
  {
    title: "Community & Industry Advisors",
    description:
      "Leaders with experience in education, technology, workforce development, and youth advocacy.",
  },
];

export const transparencyItems = [
  {
    title: "Organizational Documents",
    description: "Bylaws, governance materials, and key operating documents will be posted here as they are finalized.",
  },
  {
    title: "Financial Transparency",
    description: "Annual reporting and stewardship updates will be shared to help supporters understand how resources are used.",
  },
  {
    title: "Accountability Practices",
    description: "Impact goals, partner relationships, and program progress will be communicated with clarity and consistency.",
  },
];

export const founderBio =
  "After building a career across software development, infrastructure, automation, cloud technology, and data solutions, founder Randy Chrisp created Tech Pathways Initiative to help young people gain earlier access to the opportunities, guidance, and industry exposure that can change the direction of a career.";

export const founderMessagePlaceholder =
  "Personal founder's message coming soon. This space can later highlight Randy Chrisp's personal motivation, lived experience, and long-term vision for Tech Pathways Initiative.";

export const aboutImage = volunteerCollaborationImage;






