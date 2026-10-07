import { CheckCircleIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Milestones({ items }) {
  return (
    <section className="section shell" aria-label="Career highlights">
      <SectionHeader
        eyebrow="Career Milestones"
        title="Production-focused delivery across web and mobile."
        intro="Product ownership, real-world workflows, and measurable improvements."
      />
      <div className="milestone-grid">
        {items.map((item) => (
          <article className="milestone-card" key={item}>
            <CheckCircleIcon />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
