import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedWebsite from "@/components/FeaturedWebsite";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <>
      <Navbar profile={resume.profile} />
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main">
        <Hero resume={resume} />
        <Milestones items={resume.milestones} />
        <Skills groups={resume.skills} />
        <Experience items={resume.experience} />
        <FeaturedWebsite website={resume.featuredWebsite} />
        <Projects items={resume.projects} />
        <Contact resume={resume} />
      </main>
      <footer className="site-footer shell"><span>© {new Date().getFullYear()} Anil Janjal</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
