import SectionHeader from "./SectionHeader";

export default function Skills({ groups }) {
  return (
    <section className="section shell" id="skills">
      <SectionHeader
        eyebrow="Technical Skills"
        title="The tools behind the experience."
        intro="A practical stack for building interfaces, connecting services, managing data, and shipping reliable web and mobile products."
      />
      <div className="skills-grid">
        {groups.map((group) => (
          <article className="skill-panel" key={group.title}>
            <h3>{group.title}</h3>
            <div className="pill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
