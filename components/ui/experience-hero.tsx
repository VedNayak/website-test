const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const capabilities = [
  { number: "01", label: "Strategy", detail: "Clarity before motion" },
  { number: "02", label: "Creative", detail: "Ideas people remember" },
  { number: "03", label: "Performance", detail: "Built to make an impact" },
];

/**
 * Adapted for SocioLoca from the 21st.dev Experience Hero by
 * hardikkashiyani123456788 (catalogue component 9724).
 */
export function ExperienceHero() {
  return (
    <main className="agency-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="SocioLoca home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>SocioLoca</span>
        </a>
        <a className="nav-contact" href="mailto:hello@socioloca.com">
          Let&apos;s talk <ArrowUpRight />
        </a>
      </nav>

      <section id="top" className="hero-content">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Independent digital agency</div>
          <h1>Digital growth,<br /><em>built properly.</em></h1>
          <p>Strategy, creative, performance and technology working as one.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@socioloca.com?subject=Start%20a%20project">
              Start a project <ArrowUpRight />
            </a>
            <a className="button button-secondary" href="#work">
              View our work
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="monolith"><span>Ideas<br />into<br />impact.</span></div>
          <div className="visual-label label-top">Think</div>
          <div className="visual-label label-right">Make</div>
          <div className="visual-label label-bottom">Grow</div>
        </div>
      </section>

      <section id="work" className="capability-deck" aria-label="Our capabilities">
        {capabilities.map((item) => (
          <article className="capability-card" key={item.number}>
            <span className="card-number">{item.number}</span>
            <div>
              <h2>{item.label}</h2>
              <p>{item.detail}</p>
            </div>
            <ArrowUpRight />
          </article>
        ))}
      </section>
    </main>
  );
}
