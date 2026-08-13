const Arrow = () => <span aria-hidden="true">&#8599;</span>;

const properties = [
  {
    neighborhood: "Pacific Heights",
    title: "Timeless city residence",
    details: "4 beds Â· 3.5 baths Â· 3,480 sq ft",
    price: "$6,850,000",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88",
  },
  {
    neighborhood: "Marin County",
    title: "A private hillside retreat",
    details: "5 beds Â· 4.5 baths Â· 4,920 sq ft",
    price: "$5,295,000",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=88",
  },
  {
    neighborhood: "Noe Valley",
    title: "Modern indoor-outdoor living",
    details: "4 beds Â· 4 baths Â· 3,120 sq ft",
    price: "$4,750,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vember Conner home">
          <span className="brand-mark">VC</span>
          <span className="brand-name">Vember Conner</span>
          <span className="brand-role">Real Estate</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#properties">Properties</a>
          <a href="#approach">Approach</a>
          <a href="#expertise">Neighborhoods</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero" id="top" aria-label="Luxury Bay Area real estate">
        <iframe
          className="hero-video"
          src="https://player.vimeo.com/video/317337087?background=1&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
          title="Los Angeles luxury property tour"
          allow="autoplay; fullscreen; picture-in-picture"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">San Francisco Â· Marin Â· Beyond</p>
          <h1>Find the place<br />that feels like <em>you.</em></h1>
          <p className="hero-copy">Thoughtful representation for remarkable homes and the people who give them meaning.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#properties">Explore properties</a>
            <a className="text-link light" href="#contact">Begin a conversation <Arrow /></a>
          </div>
        </div>
        <div className="hero-foot">
          <span>Scroll to discover</span>
          <span className="line" />
          <span>CA residential real estate</span>
        </div>
      </section>

      <section className="intro section-pad">
        <p className="eyebrow">A more personal kind of real estate</p>
        <div className="intro-grid">
          <h2>Home is more than<br />an address.</h2>
          <div>
            <p className="lead">It&apos;s the morning light, the familiar street, and the feeling that you&apos;ve arrived. Vember brings a discerning eye and steady guidance to every move.</p>
            <a className="text-link" href="#approach">Meet Vember <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="properties section-pad" id="properties">
        <div className="section-head">
          <div>
            <p className="eyebrow">Curated collection</p>
            <h2>Exceptional homes,<br /><em>thoughtfully chosen.</em></h2>
          </div>
          <p className="section-note">Representative portfolio<br />Bay Area residences</p>
        </div>
        <div className="property-grid">
          {properties.map((property, index) => (
            <article className={`property-card property-${index + 1}`} key={property.title}>
              <a href="#contact" aria-label={`Inquire about ${property.title}`}>
                <div className="property-image-wrap">
                  <img src={property.image} alt={`${property.title} in ${property.neighborhood}`} />
                  <span className="card-arrow"><Arrow /></span>
                </div>
                <p className="eyebrow">{property.neighborhood}</p>
                <h3>{property.title}</h3>
                <div className="property-meta"><span>{property.details}</span><strong>{property.price}</strong></div>
              </a>
            </article>
          ))}
        </div>
        <p className="portfolio-note">Homes shown are representative of the markets Vember serves and are presented for design demonstration.</p>
      </section>

      <section className="approach" id="approach">
        <div className="approach-image" role="img" aria-label="Elegant sunlit residential interior" />
        <div className="approach-copy">
          <p className="eyebrow">The Vember Conner approach</p>
          <h2>Intuitive guidance.<br /><em>Exceptional results.</em></h2>
          <p>Real estate is personal. Vember combines market fluency, considered strategy, and genuine care to make every decision feel clearâ€”from the first conversation to the final key.</p>
          <div className="service-list">
            <a href="#contact"><span>01</span><strong>Buying a home</strong><Arrow /></a>
            <a href="#contact"><span>02</span><strong>Selling with intention</strong><Arrow /></a>
            <a href="#contact"><span>03</span><strong>Private consultation</strong><Arrow /></a>
          </div>
        </div>
      </section>

      <section className="expertise section-pad" id="expertise">
        <div className="expertise-top">
          <div>
            <p className="eyebrow light">Local knowledge, lived in</p>
            <h2>Rooted in the<br /><em>Bay Area.</em></h2>
          </div>
          <p>From storied city blocks to sunlit Marin hills, Vember helps clients understand not just the market, but the rhythm of each neighborhood.</p>
        </div>
        <div className="neighborhoods">
          <a href="#contact"><span>01</span><strong>San Francisco</strong><small>Urban character &amp; iconic architecture</small><Arrow /></a>
          <a href="#contact"><span>02</span><strong>Marin County</strong><small>Natural beauty &amp; refined living</small><Arrow /></a>
          <a href="#contact"><span>03</span><strong>Peninsula</strong><small>Connected, spacious &amp; enduring</small><Arrow /></a>
        </div>
      </section>

      <section className="testimonial section-pad">
        <p className="quote-mark">â€œ</p>
        <blockquote>Vember saw what mattered to us before we could put it into words. Every step felt considered, calm, and completely personal.</blockquote>
        <p className="attribution">â€” Recent buyer Â· San Francisco</p>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <p className="eyebrow light">Your next chapter</p>
          <h2>Let&apos;s find what<br /><em>moves you.</em></h2>
          <p>Whether you&apos;re ready to make a move or simply beginning to imagine one, Vember would love to hear from you.</p>
          <div className="contact-links">
            <a href="mailto:vember@characterhomesjp.com">vember@characterhomesjp.com <Arrow /></a>
            <a href="tel:+14152970241">(415) 297-0241 <Arrow /></a>
          </div>
          <address className="contact-address">
            <span>Office</span>
            9000 Sunset Blvd #1111<br />
            West Hollywood, CA 90069
          </address>
        </div>
        <footer>
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">VC</span>
            <span className="brand-name">Vember Conner</span>
            <span className="brand-role">Real Estate</span>
          </a>
          <p>9000 Sunset Blvd #1111<br />West Hollywood, CA 90069</p>
          <p>Â© 2026 Vember Conner</p>
        </footer>
      </section>
    </main>
  );
}

