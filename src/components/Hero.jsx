import Image from "next/image";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./Icons";

export default function Hero({ resume }) {
  const { profile, stats } = resume;

  return (
    <section className="hero-section" id="top">
      <div className="hero-grid shell">
        <div className="hero-copy reveal-in">
          <p className="eyebrow">{resume.headline}</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="current-role">Founder & Director at Akshanic Technologies</p>
          <p className="hero-summary">{resume.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              View Resume <ArrowUpRightIcon />
            </a>
            <a className="btn btn-accent" href="#projects">Explore my work <ArrowUpRightIcon /></a>
            <a className="btn btn-secondary" href={profile.resumeUrl} download="Anil_Janjal_Resume.pdf">
              Download <DownloadIcon />
            </a>
          </div>

          <div className="contact-strip" aria-label="Quick contact">
            <span>
              <MapPinIcon /> {profile.location}
            </span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <PhoneIcon /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`}>
              <MailIcon /> {profile.email}
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Anil Janjal profile">
          <div className="orbit-scene">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="skill-card card-react">React</div>
            <div className="skill-card card-flutter">Flutter</div>
            <div className="skill-card card-next">Next.js</div>
            <div className="skill-card card-firebase">Firebase</div>
            <div className="profile-frame">
              <Image
                src="/assets/anil-profile.png"
                alt="Anil Janjal"
                width={470}
                height={580}
                priority
              />
            </div>
          </div>
          <div className="portrait-caption"><span className="status-dot" /> Building products. Shipping experiences.</div>
        </div>
      </div>

      <div className="stats-grid shell" aria-label="Resume highlights">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
