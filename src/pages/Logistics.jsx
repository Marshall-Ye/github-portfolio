import './Logistics.css';

const features = [
  {
    number: '01',
    name: 'Excel Splitter',
    desc: 'Divides large commercial invoice files into compliance-sized chunks (max 995 rows) with intelligent sequential naming for downstream customs processing.'
  },
  {
    number: '02',
    name: 'CI Converter',
    desc: 'Processes commercial invoices and appends HTS tariff codes based on product trigger patterns. Handles encrypted files automatically.'
  },
  {
    number: '03',
    name: 'Line Item Converter',
    desc: 'Transforms spreadsheet rows into structured JSON payloads mapped to customs entry fields, ready for direct API submission.'
  },
  {
    number: '04',
    name: 'File Renamer',
    desc: 'Batch-renames PDF documents into customs-standard formats (PL / 3461 / 7501) in seconds — no manual renaming, no errors.'
  },
  {
    number: '05',
    name: 'Entry Creator',
    desc: 'Builds complete entry summaries and posts them to the customs entry system via authenticated API, with 30-day audit trail retention.'
  }
];

const autofixes = [
  {
    title: 'Steel & Aluminum Section 232',
    desc: 'Base HTS codes checked against trigger lists. Matching lines automatically receive Section 232 codes with nested melt/smelt country detail objects — zero manual lookup.'
  },
  {
    title: 'ZIP Code Repair',
    desc: 'US postal codes have leading zeros stripped. International codes are zero-padded to 6 digits. Both handled by the same regex pass before any field is written.'
  },
  {
    title: 'Database-Driven Tariff Augmentation',
    desc: 'HTS codes cross-referenced against an internal mapping database using 10-, 8-, and 4-digit prefix hierarchy. Matching lines get tariff codes appended automatically.'
  },
  {
    title: 'Cotton Fee Handling',
    desc: 'Cotton fees detected, calculated, added or waived based on entry classification — applied consistently across all line items without operator input.'
  },
  {
    title: 'Policy Code Exclusion',
    desc: 'A specific set of non-compliant tariff codes is silently removed from every line item before submission, regardless of what was in the source file.'
  },
  {
    title: 'Currency Normalization',
    desc: 'Price fields strip $, ¥, and € symbols, remove commas, and convert parenthetical negatives like (123.45) to -123.45. Output is always clean two-decimal format.'
  },
  {
    title: 'Group Line Aggregation',
    desc: 'Rows sharing the same Group_Line classification are consolidated into a single customs line item — quantities, weights, and values summed automatically.'
  },
  {
    title: 'HAWB Length Normalization',
    desc: 'House air waybill numbers enforced to exactly 12 characters — truncated from the right if too long, zero-padded from the left if too short.'
  },
  {
    title: 'NaN & Null Field Sanitization',
    desc: 'None, NaN, "nan", "null", and whitespace-only strings are caught across all fields and converted to proper empty values before the payload is built.'
  }
];

export default function Logistics() {
  return (
    <main className="logistics-main">
      {/* Section 01 - Hero */}
      <section className="logistics-section logistics-section--hero">
        <div className="logistics-hero-content">
          <span className="logistics-project-label">Project 01</span>
          <h1 className="logistics-hero-title">Broker Helper</h1>
          <p className="logistics-hero-problem">
            Customs brokerage requires transforming hundreds of rows of commercial invoice
            data into formats that meet strict US compliance requirements — manually.
            Hours of repetitive work, per shipment, per operator.
          </p>
          <p className="logistics-hero-solution">
            Broker Helper eliminates that entirely. Built for real operators in
            production, it automates the full pipeline — from raw Excel files to
            validated, submission-ready customs entries — turning a multi-hour process
            into a single drag-and-drop.
          </p>
          <div className="logistics-tech-stack">
            {['Python', 'pandas', 'customtkinter', 'PyInstaller', 'REST API'].map(tag => (
              <span key={tag} className="logistics-tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02 - Flow + Auto-fixes */}
      <section className="logistics-section logistics-section--flow">
        <div className="logistics-flow-container">

          {/* 3-step workflow */}
          <div className="logistics-flow-steps">
            <div className="logistics-flow-step">
              <span className="logistics-flow-num">01</span>
              <h3 className="logistics-flow-step-title">Drop your file</h3>
              <p className="logistics-flow-step-desc">Drag any commercial invoice Excel into the tool — encrypted or plain.</p>
            </div>
            <div className="logistics-flow-arrow">→</div>
            <div className="logistics-flow-step">
              <span className="logistics-flow-num">02</span>
              <h3 className="logistics-flow-step-title">Automatic processing</h3>
              <p className="logistics-flow-step-desc">Data is validated, corrected, enriched, and formatted against customs requirements.</p>
            </div>
            <div className="logistics-flow-arrow">→</div>
            <div className="logistics-flow-step">
              <span className="logistics-flow-num">03</span>
              <h3 className="logistics-flow-step-title">Submit to customs</h3>
              <p className="logistics-flow-step-desc">One click posts a fully compliant entry to the customs system. Done.</p>
            </div>
          </div>

          {/* Auto-fixes */}
          <div className="logistics-autofixes">
            <h3 className="logistics-autofixes-heading">
              What gets corrected automatically
              <span className="logistics-autofixes-sub"> — so your brokers don't have to do it</span>
            </h3>
            <div className="logistics-autofixes-grid">
              {autofixes.map(fix => (
                <div key={fix.title} className="logistics-autofix-item">
                  <span className="logistics-autofix-check">✓</span>
                  <div>
                    <strong className="logistics-autofix-title">{fix.title}</strong>
                    <p className="logistics-autofix-desc">{fix.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 03 - Features */}
      <section className="logistics-section logistics-section--features">
        <div className="logistics-features-container">
          <h2 className="logistics-features-heading">What It Does</h2>
          <div className="logistics-features-grid">
            {features.map(f => (
              <div key={f.number} className="logistics-feature-card">
                <span className="logistics-feature-number">{f.number}</span>
                <h3 className="logistics-feature-name">{f.name}</h3>
                <p className="logistics-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
