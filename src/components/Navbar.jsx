import { GithubIcon, LinkedinIcon, VercelIcon } from "./Icons";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#live-work", label: "Live Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ profile }) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Anil Janjal home">
          <span>AJ</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div>{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
        </details>

        <div className="nav-actions" aria-label="Social links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={profile.vercel} target="_blank" rel="noreferrer" aria-label="Vercel">
            <VercelIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
