import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Contact({ resume }) {
  const { profile, education, certifications } = resume;

  return (
    <section className="section contact-section" id="contact">
      <div className="shell contact-grid">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Ready for frontend, mobile, and full stack roles."
            intro="Based in Pune, available for teams building polished, production-ready web and mobile applications."
          />
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email Anil <MailIcon />
            </a>
            <a className="btn btn-secondary" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              Call <PhoneIcon />
            </a>
          </div>
        </div>

        <aside className="resume-side-panel" aria-label="Education and links">
          <div>
            <h3>Education</h3>
            {education.map((item) => (
              <p key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.place}</span>
                <small>{item.period}</small>
                {item.detail && <small>{item.detail}</small>}
              </p>
            ))}
          </div>

          <div>
            <h3>Certification</h3>
            {certifications.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="footer-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
