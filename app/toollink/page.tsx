export default function ToolLinkPage() {
  return (
    <div>
      <section className="hero">
        <h2>ToolLink</h2>
        <p>
          ToolLink gives operations teams a live system for asset visibility,
          bookings, and return accountability across every work location.
        </p>
      </section>

      <section className="section-grid">
        <article className="card">
          <h3>Asset Register</h3>
          <p>Maintain one source of truth for all tools and equipment.</p>
        </article>
        <article className="card">
          <h3>Booking Control</h3>
          <p>Reserve tools by date, crew, and project requirements.</p>
        </article>
        <article className="card">
          <h3>Usage Traceability</h3>
          <p>Track who checked out each asset and when it is due back.</p>
        </article>
        <article className="card">
          <h3>Condition Records</h3>
          <p>Log inspections, faults, and service events for each item.</p>
        </article>
      </section>

      <section className="feature-band">
        <article className="feature-panel">
          <h3>Where It Adds Value</h3>
          <p>
            ToolLink cuts replacement cost and project disruption caused by
            missing, untracked, or incorrectly assigned equipment.
          </p>
        </article>
        <article className="feature-panel">
          <h3>Primary Users</h3>
          <p>Plant managers, supervisors, and multi-site operations teams.</p>
        </article>
      </section>
    </div>
  );
}
