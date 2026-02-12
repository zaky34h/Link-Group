import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h2>One Group, Four Specialist Platforms</h2>
        <p>
          Link Group provides a connected technology layer for workforce,
          trades, tools, and materials. Our platform ecosystem gives teams a
          clearer view of operations from pre-start planning through delivery.
        </p>
      </section>
      <section className="section-grid">
        <article className="card">
          <h3>Operational Visibility</h3>
          <p>
            Shared dashboards align office and site teams on labour, supply,
            and scheduling status in real time.
          </p>
        </article>
        <article className="card">
          <h3>Built For Construction</h3>
          <p>
            Designed for builders, subcontractors, plant operators, and
            material suppliers managing multi-team projects.
          </p>
        </article>
        <article className="card">
          <h3>Data-Driven Delivery</h3>
          <p>
            Standardized workflows reduce manual admin and improve decision
            speed across every stage of delivery.
          </p>
        </article>
        <article className="card">
          <h3>Scalable Platform</h3>
          <p>
            Each product runs independently and also connects through a common
            structure, making expansion simple as teams grow.
          </p>
        </article>
      </section>

      <section className="feature-band">
        <article className="feature-panel">
          <h3>Company Snapshot</h3>
          <p>
            Link Group is focused on practical, reliable software that supports
            teams on real projects. The current version is a first-pass company
            website and product showcase for desktop users, ready for your next
            round of detailed content and branding direction.
          </p>
          <div className="tag-row">
            <span className="tag">LabourLink</span>
            <span className="tag">TradieLink</span>
            <span className="tag">ToolLink</span>
            <span className="tag">MaterialLink</span>
          </div>
        </article>
        <article className="feature-panel">
          <h3>Start A Conversation</h3>
          <p>
            Planning a rollout, pilot project, or integration? Reach out and we
            can map the right platform mix for your operation.
          </p>
          <div className="tag-row">
            <Link href="/contact" className="contact-btn">
              Contact Us
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
