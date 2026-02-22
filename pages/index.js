import Head from "next/head";

function LogoGoogle({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 262" aria-hidden="true">
      <path fill="#4285F4" d="M255.9 133.5c0-11.4-1-19.7-3.2-28.3H130.5v53.6h71.7c-1.4 11.9-9.1 29.8-26.2 41.8l-.2 1.8 38.6 29.9 2.7.3c24.8-22.9 39.1-56.6 39.1-99.1z"/>
      <path fill="#34A853" d="M130.5 261.1c35.2 0 64.8-11.6 86.4-31.6l-41.1-31.9c-11 7.7-25.8 13.1-45.3 13.1-34.5 0-63.8-22.9-74.3-54.6l-1.7.1-40.4 31.1-.6 1.6c21.4 42.5 65.3 72.2 117 72.2z"/>
      <path fill="#FBBC05" d="M56.2 156.1c-2.8-8.3-4.4-17.2-4.4-26.3s1.6-18 4.3-26.3l-.1-1.8-40.9-31.6-1.3.6C5.2 87.8 0 107.1 0 129.8c0 22.6 5.2 41.9 13.8 59.1l42.4-32.8z"/>
      <path fill="#EA4335" d="M130.5 50.8c24.6 0 41.2 10.6 50.6 19.5l37-35.9C195.2 12.5 165.7 0 130.5 0 78.8 0 34.9 29.7 13.8 70.6l42.3 32.9c10.6-31.8 39.8-52.7 74.4-52.7z"/>
    </svg>
  );
}

function LogoFacebook({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.6 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"/>
    </svg>
  );
}

function LogoInstagram({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="ig" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0" stopColor="#F58529" />
          <stop offset="0.3" stopColor="#DD2A7B" />
          <stop offset="0.6" stopColor="#8134AF" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <path fill="url(#ig)" d="M7.2 0h9.6C20.8 0 24 3.2 24 7.2v9.6c0 4-3.2 7.2-7.2 7.2H7.2C3.2 24 0 20.8 0 16.8V7.2C0 3.2 3.2 0 7.2 0zm9.6 2.2H7.2c-2.8 0-5 2.2-5 5v9.6c0 2.8 2.2 5 5 5h9.6c2.8 0 5-2.2 5-5V7.2c0-2.8-2.2-5-5-5z"/>
      <path fill="#fff" d="M12 6.1c3.3 0 5.9 2.7 5.9 5.9S15.3 18 12 18 6.1 15.3 6.1 12 8.7 6.1 12 6.1zm0 2.1c-2.1 0-3.8 1.7-3.8 3.8S9.9 15.8 12 15.8s3.8-1.7 3.8-3.8S14.1 8.2 12 8.2z"/>
      <circle cx="17.9" cy="6.2" r="1.3" fill="#fff"/>
    </svg>
  );
}

function LogoTrustpilot({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00B67A" d="M12 0l3.6 7.3 8.1 1.2-5.9 5.7 1.4 8.1L12 18.6 4.8 22.3l1.4-8.1L.3 8.5l8.1-1.2L12 0z"/>
    </svg>
  );
}

function LogoCheckatrade({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#FFD200"/>
      <path d="M7 12.5l3 3L17.5 8" fill="none" stroke="#111827" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StarRow({ count = 5 }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 0l3.6 7.3 8.1 1.2-5.9 5.7 1.4 8.1L12 18.6 4.8 22.3l1.4-8.1L.3 8.5l8.1-1.2L12 0z" />
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  const gallery = [
    { src: "/images/scaffold-house-renovation-1.jpg", tag: "Domestic elevation" },
    { src: "/images/scaffold-brick-house-2.jpg", tag: "Full wrap" },
    { src: "/images/scaffold-workers-installing-3.jpg", tag: "On-structure build" },
    { src: "/images/scaffold-commercial-building-4.jpg", tag: "Multi-storey" },
    { src: "/images/scaffold-large-project-5.jpg", tag: "Commercial frame" },
    { src: "/images/scaffold-terrace-row-6.jpg", tag: "Terrace access" },
    { src: "/images/scaffold-worker-detail-7.jpg", tag: "Detail & fittings" },
    { src: "/images/scaffold-safety-netting-8.jpg", tag: "Safety netting" },
  ];

  return (
    <>
      <Head>
        <title>UK Scaffolding • Safe, tidy access for roofing, rendering & renovations</title>
        <meta
          name="description"
          content="Domestic & commercial scaffolding. Safety-first, tidy installs. Fast quotes. Reviews from Google, Facebook, Trustpilot & Checkatrade."
        />
      </Head>

      <div className="page">
        {/* Sticky header */}
        <header className="topbar">
          <div className="container topbarInner">
            <div className="brand">
              <div className="brandMark" aria-hidden="true">UK</div>
              <div className="brandText">
                <strong>UK Scaffolding</strong>
                <span>Domestic • Commercial • Temporary Roofs</span>
              </div>
            </div>

            <nav className="nav" aria-label="Primary">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#trust">Accreditations</a>
              <a href="#contact">Quote</a>
            </nav>

            <div className="actions">
              <a className="btn btnGhost" href="tel:+447000000000">Call</a>
              <a className="btn btnPrimary" href="#contact">Get a quote</a>
            </div>
          </div>
        </header>

        {/* HERO (full image with copy over the top) */}
        <section className="hero">
          <div className="heroBg" role="img" aria-label="Scaffolding install" />
          <div className="heroOverlay" />
          <div className="container heroInner">
            <div className="heroCard">
              <div className="pill">Safety-first • Tidy installs • Fast quotes</div>
              <h1>Scaffolding that looks professional — and is built properly.</h1>
              <p>
                Big, clear images. Straightforward pricing. A crew that turns up, keeps access clear,
                and leaves your site tidy.
              </p>

              <div className="heroCtas">
                <a className="btn btnPrimary" href="#contact">Get a quote</a>
                <a className="btn btnGhost" href="#work">See installs</a>
              </div>

              <div className="trustRow" aria-label="Trust logos">
                <span className="trustPill"><LogoGoogle /> <b>4.9</b> <small>Google</small></span>
                <span className="trustPill"><LogoFacebook /> <b>4.8</b> <small>Facebook</small></span>
                <span className="trustPill"><LogoTrustpilot /> <b>4.7</b> <small>Trustpilot</small></span>
                <span className="trustPill"><LogoCheckatrade /> <b>9.8</b> <small>Checkatrade</small></span>
                <span className="trustPill"><LogoInstagram /> <small>Instagram</small></span>
              </div>

              <div className="heroBadges">
                <span className="badge">Fully insured</span>
                <span className="badge">RAMS & handover paperwork</span>
                <span className="badge">Netting & edge protection</span>
                <span className="badge">Inspections where required</span>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE BANDS (big images + text over images) */}
        <section className="bands" aria-label="Image-led service highlights">
          <div className="band" style={{ "--bg": "url(/images/scaffold-terrace-row-6.jpg)" }}>
            <div className="bandOverlay" />
            <div className="container bandInner">
              <div className="bandCard">
                <div className="kicker">Domestic</div>
                <h2>Roofing, chimneys & rendering — tidy scaffolds that keep access open.</h2>
                <p>Ideal for roofers, renderers, painters and solar. Fast install, tidy removal.</p>
                <div className="bandCtas">
                  <a className="btn btnPrimary" href="#contact">Request a quote</a>
                  <a className="btn btnGhost" href="#work">View photos</a>
                </div>
              </div>
            </div>
          </div>

          <div className="band" style={{ "--bg": "url(/images/scaffold-large-project-5.jpg)" }}>
            <div className="bandOverlay" />
            <div className="container bandInner right">
              <div className="bandCard">
                <div className="kicker">Commercial</div>
                <h2>Multi-storey frames, phased builds and proper planning.</h2>
                <p>Coordination, safe access routes, and protection for pedestrians and neighbours.</p>
                <div className="bandCtas">
                  <a className="btn btnPrimary" href="#contact">Book a site visit</a>
                  <a className="btn btnGhost" href="#trust">Compliance</a>
                </div>
              </div>
            </div>
          </div>

          <div className="band" style={{ "--bg": "url(/images/scaffold-safety-netting-8.jpg)" }}>
            <div className="bandOverlay" />
            <div className="container bandInner">
              <div className="bandCard">
                <div className="kicker">Safety</div>
                <h2>Netting, edge protection, signage — the job looks serious.</h2>
                <p>Paperwork handled: RAMS, handover, inspections where required.</p>
                <div className="bandCtas">
                  <a className="btn btnPrimary" href="#contact">Get pricing</a>
                  <a className="btn btnGhost" href="#reviews">Reviews</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BIG IMAGE GRID (huge tiles with overlay text) */}
        <section id="work" className="section workSection">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="kicker">Recent installs</div>
                <h2>Big images. Writing over the top. That’s the vibe.</h2>
              </div>
              <p className="sub">Everything below is full-bleed and designed to feel premium and visual.</p>
            </div>
          </div>

          <div className="bigGrid" aria-label="Project gallery">
            {gallery.map((it, i) => (
              <figure key={i} className="bigTile" style={{ "--bg": `url(${it.src})` }}>
                <div className="bigTileOverlay" />
                <figcaption>
                  <span className="tag">{it.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Services (minimal text, still visual) */}
        <section id="services" className="section sectionAlt">
          <div className="container">
            <div className="kicker">Services</div>
            <h2>What we cover.</h2>
            <p className="sub">Simple list — because the photos do the heavy lifting.</p>
            <div className="serviceStrip" aria-label="Services list">
              {[
                "Domestic scaffolding",
                "Commercial scaffolding",
                "Temporary roofs",
                "Chimney scaffolds",
                "Loading bays",
                "Edge protection & netting",
                "Stair towers",
                "Designs • RAMS • inspections",
              ].map((t, i) => (
                <span key={i} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews ON TOP of a big background image */}
        <section id="reviews" className="section reviewsBand">
          <div className="reviewsBg" role="img" aria-label="Scaffolding worker" />
          <div className="reviewsOverlay" />
          <div className="container reviewsInner">
            <div className="sectionHead">
              <div>
                <div className="kicker">Reviews</div>
                <h2>Trusted for reliability and tidy sites.</h2>
              </div>
              <p className="sub">Reviews shown for layout — swap with your real ones when you’re ready.</p>
            </div>

            <div className="reviewGrid">
              {[
                { name: "Homeowner", src: "Google", logo: <LogoGoogle />, rating: 5, text: "Quote was clear, turned up on time, and the scaffold was spotless. Roofer said it was one of the safest setups he’s worked on." },
                { name: "Builder", src: "Checkatrade", logo: <LogoCheckatrade />, rating: 5, text: "Good team. Worked around deliveries and kept access clear. Inspections done without chasing." },
                { name: "Property Manager", src: "Trustpilot", logo: <LogoTrustpilot />, rating: 5, text: "Professional from start to finish — paperwork sorted, tidy install, and removed exactly when promised." },
              ].map((r, i) => (
                <div key={i} className="reviewCard">
                  <div className="reviewTop">
                    <div className="reviewWho">
                      <strong>{r.name}</strong>
                      <span className="reviewSrc">{r.logo} <small>{r.src}</small></span>
                    </div>
                    <div className="reviewStars"><StarRow count={r.rating} /></div>
                  </div>
                  <p className="reviewText">“{r.text}”</p>
                </div>
              ))}
            </div>

            <div className="logoStrip" aria-label="Platform logos">
              <span><LogoGoogle /> <b>Google</b></span>
              <span><LogoFacebook /> <b>Facebook</b></span>
              <span><LogoInstagram /> <b>Instagram</b></span>
              <span><LogoTrustpilot /> <b>Trustpilot</b></span>
              <span><LogoCheckatrade /> <b>Checkatrade</b></span>
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section id="trust" className="section sectionAlt">
          <div className="container">
            <div className="kicker">Credibility</div>
            <h2>Safety, compliance and paperwork — done properly.</h2>

            <div className="certGrid">
              {[
                { title: "Public & employers’ liability", copy: "Insurance details available on request." },
                { title: "CISRS-trained scaffolders", copy: "Widely recognised UK training standard for scaffolders." },
                { title: "TG20:21 compliant designs", copy: "Industry guidance for tube & fitting scaffolds." },
                { title: "SG4:22 working at height", copy: "Current guidance for safe scaffolding operations." },
                { title: "RAMS & handover", copy: "Risk assessments, method statements and handover paperwork where required." },
                { title: "SSIP schemes", copy: "Common examples: CHAS, SMAS, SafeContractor (varies by contractor)." },
              ].map((c, i) => (
                <div key={i} className="certCard">
                  <div className="certTitle">{c.title}</div>
                  <div className="certCopy">{c.copy}</div>
                </div>
              ))}
            </div>

            <div className="note">Ask us for current certificates and we’ll send them over.</div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container contactGrid">
            <div>
              <div className="kicker">Get a quote</div>
              <h2>Send the postcode + a couple of photos — we’ll price it fast.</h2>
              <p className="sub">Roofing? Render? Chimney? Tell us what trades need access and your preferred dates.</p>

              <div className="contactCards">
                <a className="contactCard" href="tel:+447000000000">
                  <strong>Call</strong>
                  <span>+44 7000 000000</span>
                </a>
                <a className="contactCard" href="mailto:hello@ukscaffolding.co.uk">
                  <strong>Email</strong>
                  <span>hello@ukscaffolding.co.uk</span>
                </a>
              </div>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Name
                <input placeholder="Your name" />
              </label>
              <label>
                Postcode
                <input placeholder="e.g. BN5" />
              </label>
              <label>
                What do you need?
                <textarea placeholder="Tell us about the job (roofing, render, chimney, access needs, dates)…" rows={5} />
              </label>
              <button className="btn btnPrimary" type="submit">Send enquiry</button>
              <p className="fineprint">We’ll reply as quickly as possible. If it’s urgent, give us a call.</p>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <div>
              <strong>UK Scaffolding</strong>
              <div className="muted">Safety-first access • Domestic & commercial</div>
            </div>
            <div className="muted">© {new Date().getFullYear()} • All rights reserved</div>
          </div>
        </footer>
      </div>
    </>
  );
}
