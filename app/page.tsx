"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { projects } from "./portfolio-data";

const filters = ["All", "Brand", "UGC", "Educational", "Creative", "Editing"] as const;

export default function Home() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [formState, setFormState] = useState("");
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in-view")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("Your brief is ready to send once Riri’s email or form endpoint is connected.");
  }

  return (
    <main>
      <header className="site-nav">
        <Link href="#top" className="wordmark" aria-label="Riri, home">RIRI<span>®</span></Link>
        <nav aria-label="Primary navigation">
          <Link href="#selected-work">Work</Link><Link href="#services">Services</Link><Link href="#about">About</Link><Link href="#contact">Contact</Link>
        </nav>
        <p className="availability"><i /> Available for projects</p>
      </header>

      <section className="hero" id="top">
        <Image src="/images/riri-hero.png" alt="A creative director reviewing footage in a dark studio — illustrative placeholder image" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-meta"><span>Creative storyteller</span><span>Lagos · Worldwide</span></div>
        <div className="hero-copy">
          <p className="eyebrow">Content Creator · Video Editor · Creative Storyteller</p>
          <h1>I create stories<br />people want <em>to watch.</em></h1>
          <div className="hero-lower">
            <p>I turn ideas and digital products into visual stories that educate, entertain, and connect.</p>
            <div className="hero-actions"><Link href="#selected-work" className="button button-light">View my work <span>↘</span></Link><Link href="#contact" className="button button-ghost">Work with me <span>↗</span></Link></div>
          </div>
        </div>
        <div className="scrub" aria-hidden="true"><span /><b>00:08</b></div>
      </section>

      <section className="work-intro reveal" id="selected-work">
        <div className="section-index">01 / Selected Work</div>
        <div><h2>Stories, campaigns<br />& ideas in motion.</h2><p>A collection of work brought from first thought to final frame. Replace the clearly marked entries below with real projects as they’re ready.</p></div>
      </section>

      <section className="project-grid" aria-label="Selected work placeholders">
        {projects.slice(0, 4).map((project, index) => (
          <article className={`project-card project-card-${index + 1} reveal`} key={project.slug}>
            <Link href={`/work/${project.slug}`} aria-label={`Open ${project.title} case study placeholder`}>
              <div className="project-media"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, 50vw" /><span className="placeholder-tag">Media placeholder</span><span className="project-number">0{index + 1}</span><span className="play-mark" aria-hidden="true">▶</span></div>
              <div className="project-caption"><div><h3>{project.title}</h3><p>{project.category}</p></div><p>{project.year} · {project.role}</p></div>
            </Link>
          </article>
        ))}
      </section>

      <section className="manifesto-band reveal" id="services">
        <div className="section-index light">02 / What I do</div>
        <h2>Ideas are easy.<br /><em>Making people care</em><br />is the interesting part.</h2>
        <div className="service-list">
          <article><span>01</span><h3>Content Creation</h3><p>Concept development, scripting, filming, UGC, educational content, product demonstrations, and social-first storytelling.</p></article>
          <article><span>02</span><h3>Video Editing</h3><p>Short-form editing, pacing, B-roll, sound design, text animation, visual storytelling, and retention-focused cuts.</p></article>
          <article><span>03</span><h3>Creative Strategy</h3><p>Campaign concepts, creative direction, hooks, storytelling frameworks, product education, and content strategy.</p></article>
        </div>
        <div className="exploring"><span>Also exploring</span><p>UI/UX Design · Visual Design · Motion Design</p></div>
      </section>

      <section className="reel-section" id="watch">
        <div className="reel-heading reveal"><div className="section-index">03 / The Reel</div><h2>Watch<br /><em>my work.</em></h2><p>Social-first stories are designed to be felt full-screen. Add Riri’s own vertical videos here and they’ll play in place.</p></div>
        <div className="filter-row" role="group" aria-label="Filter work">
          {filters.map((name) => <button key={name} type="button" className={filter === name ? "active" : ""} onClick={() => setFilter(name)} aria-pressed={filter === name}>{name}</button>)}
        </div>
        <div className="reel-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <Link href={`/work/${project.slug}`} className="reel-tile reveal" key={project.slug}>
              {project.videoSrc ? <video src={project.videoSrc} poster={project.image} muted loop playsInline controls aria-label={`${project.title} video`} /> : <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 80vw, 28vw" />}
              <div className="reel-overlay"><span>{project.category}</span><b aria-hidden="true">▶</b><p>{project.title}<small>Video placeholder · {String(index + 1).padStart(2, "0")}</small></p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="case-studies">
        <div className="case-title reveal"><div className="section-index light">04 / Case Studies</div><h2>From the brief<br />to the final frame.</h2></div>
        {projects.slice(0, 3).map((project, index) => (
          <article className="case-row reveal" key={project.slug}>
            <span>0{index + 1}</span><div><p>{project.client}</p><h3>{project.title}</h3></div><p>{project.description}</p><Link href={`/work/${project.slug}`}>Read the case <b>↗</b></Link>
          </article>
        ))}
        <p className="placeholder-disclosure">All case-study copy, media, clients, and results are clearly marked placeholders until Riri supplies real project details.</p>
      </section>

      <section className="brands reveal">
        <div className="section-index">05 / Brands & Campaigns</div>
        <h2>Creating at the intersection of<br /><em>products, culture & storytelling.</em></h2>
        <div className="logo-wall" aria-label="Brand logo placeholders"><span>Your logo</span><span>Brand here</span><span>Next campaign</span><span>Creator program</span><span>Product partner</span></div>
        <div className="campaign-notes"><article><span>Campaign contribution 01</span><h3>Concept, script, film, edit.</h3><p>Replace this note with a concise explanation of what Riri contributed to a real campaign.</p></article><article><span>Campaign contribution 02</span><h3>Creative direction, end to end.</h3><p>Use this space for the idea, the audience, and the exact role Riri played.</p></article></div>
      </section>

      <section className="beyond">
        <div className="beyond-copy reveal"><div className="section-index light">06 / Other Creative Work</div><h2>Beyond<br />the timeline.</h2><p>Small experiments that stretch the same storytelling instinct into new shapes.</p></div>
        <div className="beyond-grid">
          {["UI/UX experiment", "Motion study", "Short-film concept"].map((title, index) => <article className="beyond-card reveal" key={title}><div className="beyond-visual"><span>0{index + 1}</span><b>{index === 0 ? "▦" : index === 1 ? "◌" : "◒"}</b></div><h3>{title}</h3><p>Project placeholder</p></article>)}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-portrait reveal"><Image src="/images/riri-hero.png" alt="Studio scene used as a portrait placeholder for Riri" fill sizes="(max-width: 800px) 100vw, 45vw" /><span>Portrait placeholder — replace with Riri</span></div>
        <div className="about-copy reveal"><div className="section-index">07 / About</div><h2>Hi, I’m<br /><em>Riri.</em></h2><p className="lead">I like taking ideas that feel complicated and finding the clearest, most watchable way to tell them.</p><p>My work lives where storytelling, video, technology, culture, and design overlap. I create content for brands and digital products, then keep experimenting with new ways to make an idea land.</p><div className="currently"><span>Currently exploring</span><p>Motion Design<br />UI/UX<br />AI-assisted creative workflows<br />Filmmaking</p></div></div>
      </section>

      <section className="wins reveal">
        <div className="section-index light">08 / Results & Recognition</div><h2>A few wins<br /><em>along the way.</em></h2>
        <div className="win-grid"><article><strong>—</strong><p>Views across a featured campaign<br /><span>Add verified result</span></p></article><article><strong>—%</strong><p>Average engagement<br /><span>Add verified result</span></p></article><article><strong>—</strong><p>Award or recognition<br /><span>Add real achievement</span></p></article></div>
        <blockquote>“Add a short, specific testimonial from a client or collaborator here.”<footer>— Client name, role & company</footer></blockquote>
      </section>

      <section className="contact" id="contact">
        <div className="contact-head reveal"><div className="section-index">09 / Contact</div><h2>Have something<br /><em>worth telling?</em></h2><p>Let’s turn it into something people want to watch, understand, and remember.</p></div>
        <form onSubmit={handleSubmit} className="contact-form reveal">
          <p className="form-note">Demo form — connect Riri’s inbox before launch.</p>
          <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required placeholder="Your name" /></div>
          <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="you@company.com" /></div>
          <div className="field"><label htmlFor="company">Company / Brand</label><input id="company" name="company" placeholder="Optional" /></div>
          <div className="field"><label htmlFor="project">What are we creating?</label><select id="project" name="project" defaultValue=""><option value="" disabled>Select a project type</option><option>Brand content</option><option>UGC / Social</option><option>Video editing</option><option>Creative strategy</option><option>Something else</option></select></div>
          <div className="field"><label htmlFor="budget">Budget</label><select id="budget" name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Let’s discuss</option><option>Project rate to be confirmed</option></select></div>
          <div className="field field-wide"><label htmlFor="message">Message</label><textarea id="message" name="message" required rows={4} placeholder="The story, the goal, the timeline…" /></div>
          <button type="submit" className="send-button">Send the brief <span>↗</span></button><output aria-live="polite">{formState}</output>
        </form>
        <div className="contact-links"><a href="mailto:hello@example.com">Email <span>↗</span></a><a href="#contact" aria-label="X profile placeholder">X / Twitter <span>↗</span></a><a href="#contact" aria-label="LinkedIn profile placeholder">LinkedIn <span>↗</span></a></div>
      </section>

      <footer className="footer"><p>Riri — Content Creator & Video Editor</p><p>© {new Date().getFullYear()} · Lagos / Worldwide</p><Link href="#top">Back to top ↑</Link></footer>
    </main>
  );
}
