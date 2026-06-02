const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "RESEARCH", href: "#research" },
  { label: "PUBLICATIONS", href: "#publications" },
  { label: "CONTACT", href: "#contact" },
];

const SKILLS = [
  "Qualitative Research",
  "Science Education Research",
  "Classroom Discourse Analysis",
  "Scientific Argumentation Analysis",
  "Academic Writing",
  "Research Project Management",
  "Biology Education",
  "Narrative Inquiry, Autoethnography",
];

const EXPERIENCE = [
  {
    title: "Seoul National University Learning Sciences Research Institute",
    role: "Graduate Research Assistant",
    period: "2025/01/01 - 2026/06/02",
    desc: "AI-based Sociocultural Analysis of Classroom Discourse 연구에 참여하며 교실 담화, 학생 참여, 인식적 행위주체성 분석을 위한 연구 자료 정리와 분석을 수행하고 있다.",
  },
  {
    title: "Gyeonggi Provincial Office of Education IB Program Longitudinal Study",
    role: "Graduate Research Assistant",
    period: "2024/01/01 - 2025/12/31",
    desc: "경기도 IB 프로그램 운영 효과성 종단연구 및 2년차 연구에 학생연구원으로 참여하며 자료 수집, 문헌 검토, 분석 보조, 연구 결과 정리에 기여하였다.",
  },
  {
    title: "Icheon Jeil High School",
    role: "Public High School Biology Teacher",
    period: "2022/03/01 - 2024/02/29",
    desc: "통합과학, 생명과학 I/II, 생활과 과학 수업을 담당하며 학생의 과학 개념 이해와 탐구 역량 향상을 지원하였다.",
  },
];

const EDUCATION = [
  {
    degree: "Ph.D. Student",
    school: "Seoul National University",
    major: "Science Education",
    period: "2026/03/01 - Present",
  },
  {
    degree: "M.A.",
    school: "Seoul National University",
    major: "Science Education, Biology Education",
    period: "2024/03/01 - 2026/02/28",
  },
];

const PUBLICATIONS = [
  {
    title: "A framework and AI-based tool for analyzing epistemic agency in small-group scientific argumentation",
    type: "Master's Thesis",
    year: "2026",
  },
  {
    title: "Instructional Supports for Improving the Quality of Small-Group Argumentation among Elementary Students",
    type: "Journal Article",
    year: "2025",
  },
  {
    title: "Bearing the Burden of Teacher Identity: An Autoethnographic Study on Emotional Exhaustion and Identity Crisis in a Novice Teacher",
    type: "Journal Article",
    year: "2025",
  },
];

const PROJECTS = [
  "Longitudinal Study on the Effectiveness of IB Programs",
  "Longitudinal Study on the Effectiveness of IB Programs, Year 2",
  "AI-based Sociocultural Analysis of Classroom Discourse",
  "Seoul RISE Future Education Ecosystem Project",
];

export default function Home() {
  return (
    <main className="portfolio">
      <header className="site-header section-wrap">
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

      <section className="hero section-wrap">
        <p className="eyebrow">DOCTORAL STUDENT IN SCIENCE EDUCATION</p>
        <h1>
          Turning research
          <br />
          into educational
          <br />
          impact
        </h1>
        <div className="hero-bottom">
          <p>
            과학 교실에서 학생들이 지식을 구성하는 과정을 질적으로 분석하고,
            교수적 지원이 학습의 질을 높이는 방식을 연구합니다.
          </p>
          <a href="#about" className="scroll-circle" aria-label="about section">
            ↓
          </a>
        </div>
      </section>

      <section id="experience" className="section-wrap section-gap">
        <SectionLabel text="WORK EXPERIENCE" />
        <div className="project-grid">
          {EXPERIENCE.map((item) => (
            <article key={item.title} className="project-card">
              <p className="meta">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="role">{item.role}</p>
              <p className="card-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-wrap split-section section-gap">
        <div>
          <SectionLabel text="ABOUT" />
          <h2>
            I am Hun Jeong, currently working as a doctoral student and research assistant in
            science education.
          </h2>
        </div>
        <div className="about-text">
          <p>
            Hun Jeong is a doctoral student in Science Education at Seoul National University,
            specializing in qualitative research, small-group scientific argumentation, epistemic
            agency, and classroom interaction.
          </p>
          <p>
            과학교육 연구와 학교 현장 경험을 연결하여, 학생 참여와 인식적 행위주체성,
            교실 담화의 질을 향상할 수 있는 연구 기반의 교수-학습 설계를 지향합니다.
          </p>
        </div>
      </section>

      <section className="section-wrap split-section section-gap compact-gap">
        <div>
          <SectionLabel text="RESEARCH FOCUS" />
          <ul className="simple-list">
            {SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel text="EDUCATION" />
          <ul className="simple-list">
            {EDUCATION.map((edu) => (
              <li key={edu.degree}>
                <strong>{edu.degree}</strong>
                <span>{edu.school}</span>
                <span>{edu.major}</span>
                <span>{edu.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="publications" className="section-wrap section-gap">
        <SectionLabel text="PUBLICATIONS" />
        <div className="line-list">
          {PUBLICATIONS.map((item) => (
            <article key={item.title} className="line-item">
              <p className="meta">{item.year}</p>
              <div>
                <h4>{item.title}</h4>
                <p>{item.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="section-wrap split-section section-gap compact-gap">
        <div>
          <SectionLabel text="PROJECTS" />
          <ul className="simple-list">
            {PROJECTS.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel text="CONTACT" />
          <ul className="simple-list">
            <li>
              <strong>Email</strong>
              <a href="mailto:wjdgns0706@snu.ac.kr">wjdgns0706@snu.ac.kr</a>
            </li>
            <li>
              <strong>Phone</strong>
              <span>010-2693-9067</span>
            </li>
            <li>
              <strong>Location</strong>
              <span>Seoul, South Korea</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="section-wrap cta-inner">
          <h2>
            Got a project in mind?
            <br />
            Hit me up.
          </h2>
          <a href="mailto:wjdgns0706@snu.ac.kr">wjdgns0706@snu.ac.kr</a>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ text }: { text: string }) {
  return <p className="section-label">{text}</p>;
}
