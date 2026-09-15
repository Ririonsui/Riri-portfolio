import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../portfolio-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} — Riri`, description: project.description } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextIndex = (projects.indexOf(project) + 1) % projects.length;
  const next = projects[nextIndex];

  return (
    <main className="case-page">
      <header className="case-nav"><Link href="/" className="wordmark">RIRI<span>®</span></Link><Link href="/#selected-work">← All work</Link><span>Case study / Placeholder</span></header>
      <section className="case-hero">
        <div className="case-kicker"><span>{project.category}</span><span>{project.year}</span><span>{project.role}</span></div>
        <h1>{project.title}</h1>
        <div className="case-hero-media"><Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" /><span>Replace with final campaign film</span><b aria-hidden="true">▶</b></div>
      </section>

      <section className="case-story">
        <aside><p>Client</p><strong>{project.client}</strong><p>Category</p><strong>{project.category}</strong><p>Status</p><strong>Content placeholder</strong></aside>
        <div className="story-block"><span>01 / The Brief</span><h2>What did the project need?</h2><p>Add the real tension here: the product, audience, communication challenge, timeline, and what success meant for the brand.</p></div>
        <div className="story-block"><span>02 / The Idea</span><h2>The thought that made it click.</h2><p>{project.description} Replace this with the creative concept, central hook, and why it felt right for the audience.</p></div>
        <div className="role-block"><span>03 / My Role</span><div><b>Concept</b><b>Scriptwriting</b><b>Creative Direction</b><b>Filming</b><b>Editing</b></div><p>Keep only the responsibilities Riri actually owned for this project.</p></div>
      </section>

      <section className="execution">
        <span>04 / The Execution</span><h2>From a line on paper<br />to the final cut.</h2><div className="execution-grid"><p>Describe how the idea became the finished piece: the creative choices, production approach, editing rhythm, sound, text, and platform-specific decisions.</p><div className="contact-sheet"><Image src="/images/project-storyboard.png" alt="Storyboard placeholder" fill sizes="50vw" /><span>Process media placeholder</span></div></div>
      </section>

      <section className="final-content"><div><span>05 / Final Content</span><h2>Press play.</h2><p>Embed the finished video here. The layout supports a prominent 9:16 social-first film or wider campaign edit.</p></div><div className="final-frame">{project.videoSrc ? <video src={project.videoSrc} poster={project.image} controls playsInline aria-label={`${project.title} final video`} /> : <><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, 50vw" /><button type="button" aria-label="Video placeholder, no video connected">▶</button><span>Video placeholder</span></>}</div></section>

      <section className="results-placeholder"><span>06 / The Results</span><h2>What moved.</h2><div><article><strong>—</strong><p>Views<br /><small>Add verified result</small></p></article><article><strong>—%</strong><p>Engagement<br /><small>Add verified result</small></p></article><article><strong>—</strong><p>Recognition<br /><small>Add real outcome</small></p></article></div></section>

      <Link href={`/work/${next.slug}`} className="next-case"><span>Next case</span><h2>{next.title}</h2><b>↗</b></Link>
      <footer className="case-footer"><p>Riri — Content Creator & Video Editor</p><Link href="/#contact">Start a project ↗</Link></footer>
    </main>
  );
}
