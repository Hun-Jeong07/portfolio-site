import Image from "next/image";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PUBLICATIONS", href: "#publications" },
  { label: "CONTACT", href: "#contact" },
];

const RESEARCH_KEYWORDS = [
  "Qualitative Research in Science Education",
  "Small-Group Scientific Argumentation",
  "Epistemic Agency",
  "Instructional Supports and Classroom Interaction",
  "Storyline-Based Science Curriculum Design",
  "Autoethnography and Narrative Inquiry",
];

const EDUCATION = [
  {
    title: "Ph.D. Student in Science Education",
    school: "Seoul National University, Republic of Korea",
    period: "2026.03 - Present",
  },
  {
    title: "M.A. in Science Education (Biology Education)",
    school: "Seoul National University, Republic of Korea",
    period: "2024.03 - 2026.02",
  },
];

const EXPERIENCE = [
  {
    role: "Biology Teacher",
    org: "Icheon Jeil High School, Republic of Korea",
    period: "2022.03 - 2024.02",
    detail: "Integrated Science, Biology I, Biology II, Science in Everyday Life",
  },
  {
    role: "Earth Science Instructor",
    org: "Private Science Academy",
    period: "2020.02 - 2020.08",
    detail: "Middle and high school earth science instruction",
  },
  {
    role: "Private Tutor",
    org: "High School Mathematics and Science",
    period: "2015 - 2021",
    detail: "Individual mentoring with long-term academic coaching",
  },
];

const PUBLICATIONS = [
  "정훈. (2026). 소집단 논변 속 인식적 행위주체성 분석을 위한 프레임워크 및 AI 기반 도구 제안 [석사학위논문, 서울대학교 대학원].",
  "Jeong, H., & Shim, S. Y. (2025). Instructional supports for improving the quality of small-group argumentation among elementary students. Journal of the Korean Association for Science Education, 45(2), 179-197.",
  "Jeong, H., & Jun, M. K. (2025). Bearing the burden of teacher identity: An autoethnographic study on emotional exhaustion and identity crisis in a novice teacher. 교육인류학연구, 1-34.",
];

const PRESENTATIONS = [
  "NARST Annual International Conference (Washington, D.C., 2025) - Poster",
  "ICER International Conference (Seoul, 2025) - Poster",
  "AABE International Conference (Matsuyama, 2024) - Oral",
  "SNU-HU-NTNU-KU International Joint Symposium (Seoul, 2024) - Oral",
];

const AWARDS = [
  "Best Paper Award, Oral Presentation Division (Korean Society of Biology Education, 2024)",
  "Best Paper Award, Oral Presentation Division (Korean Society of Biology Education, 2025)",
  "Best Paper Award, Poster Presentation Division (Korean Society of Biology Education, 2025)",
  "Excellent Graduate Research Poster Award (Department of Biology Education, 2025)",
];

const PROJECTS = [
  "Longitudinal Study on the Effectiveness of the Gyeonggi-do IB Program (2024)",
  "Longitudinal Study on the Effectiveness of the Gyeonggi-do IB Program, Year 2 (2025)",
  "Sociocultural Analysis of AI-Based Classroom Discourse (2025 - Present)",
  "Seoul RISE Future Education Ecosystem Research Project (2025 - Present)",
];

export default function Home() {
  return (
    <main className="portfolio">
      <header className="section-wrap site-header">
        <a href="#" className="brand">
          HUN JEONG
        </a>
        <nav className="top-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section-wrap" id="about">
        <div className="hero-text">
          <p className="eyebrow">DOCTORAL STUDENT · SCIENCE EDUCATION</p>
          <h1>Hun Jeong</h1>
          <p>
            정훈은 서울대학교 과학교육과 생물전공 박사과정 연구자로서 소집단 논변, 인식적
            행위주체성, 교실 상호작용, 교수적 지원을 중심으로 연구합니다.
          </p>
          <a href="mailto:wjdgns0706@snu.ac.kr" className="hero-cta">
            CONTACT
          </a>
        </div>
        <div className="hero-side">
          <div className="photo-wrap">
            <Image
              src="/profile-photo.jpg"
              alt="Hun Jeong at conference poster session"
              width={760}
              height={1000}
              priority
            />
          </div>
          <div className="hero-contact">
            <p className="hero-contact-title">CONTACT</p>
            <ul className="hero-meta">
              <li>Seoul National University</li>
              <li>Ph.D. Student, Science Education</li>
              <li>wjdgns0706@snu.ac.kr</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="banner peach">
        <div className="section-wrap">
          <p>WELCOME</p>
        </div>
      </section>

      <section className="section-wrap section-gap" id="education">
        <SectionTitle text="CREATING" />
        <div className="card-grid">
          {EDUCATION.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.school}</p>
              <span>{item.period}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="banner mint">
        <div className="section-wrap">
          <p>OR ANIMATING</p>
        </div>
      </section>

      <section className="section-wrap section-gap" id="experience">
        <SectionTitle text="WORKING ON RESEARCH + TEACHING" />
        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <article key={item.role + item.period} className="timeline-item">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-org">{item.org}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-gap">
        <SectionTitle text="RESEARCH FOCUS" />
        <ul className="chip-list">
          {RESEARCH_KEYWORDS.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </section>

      <section className="section-wrap section-gap split-layout" id="publications">
        <div>
          <SectionTitle text="PUBLICATIONS" />
          <ul className="bullet-list">
            {PUBLICATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle text="PRESENTATIONS" />
          <ul className="bullet-list">
            {PRESENTATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-wrap section-gap split-layout">
        <div>
          <SectionTitle text="AWARDS" />
          <ul className="bullet-list">
            {AWARDS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle text="RESEARCH PROJECTS" />
          <ul className="bullet-list">
            {PROJECTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="section-wrap cta-inner">
          <h2>LET&apos;S BUILD BETTER SCIENCE LEARNING EXPERIENCES</h2>
          <p>
            Email: <a href="mailto:wjdgns0706@snu.ac.kr">wjdgns0706@snu.ac.kr</a>
          </p>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ text }: { text: string }) {
  return <p className="section-title">{text}</p>;
}
