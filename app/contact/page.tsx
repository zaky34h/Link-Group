export default function ContactPage() {
  return (
    <div>
      <section className="hero">
        <h2>Contact Us</h2>
        <p>
          For partnerships, product demos, or project onboarding enquiries,
          contact the Link Group team and we will respond promptly.
        </p>
      </section>

      <section className="feature-band">
        <article className="feature-panel">
          <h3>General Enquiries</h3>
          <p>hello@linkgroup.com.au</p>
          <div className="tag-row">
            <a className="contact-btn" href="mailto:hello@linkgroup.com.au">
              Send Email
            </a>
          </div>
        </article>
        <article className="feature-panel">
          <h3>Call Our Team</h3>
          <p>+61 2 9000 0000</p>
        </article>
      </section>

      <section className="single-column">
        <article className="card">
          <h3>Office Hours</h3>
          <p>Monday to Friday, 8:30am to 5:30pm (AEST)</p>
        </article>
      </section>
    </div>
  );
}
