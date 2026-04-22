const steps = [
  {
    badge: "SOURCE",
    title: "Source",
    description:
      "We identify the full landscape of viable solutions and validate each one against technical, financial, and operational criteria.",
  },
  {
    badge: "SCREEN",
    title: "Screen",
    description:
      "We pressure-test each validated option through modeled scenarios that expose failure points and quantify upside.",
  },
  {
    badge: "SIMULATE",
    title: "Simulate",
    description:
      "We design a low-risk pilot path that proves real-world fit, validates performance early, and gives you clarity before full deployment.",
  },
  {
    badge: "SECURE",
    title: "Secure",
    description:
      "We negotiate directly with the manufacturer on your behalf, securing client-centric pricing and executive-level terms that shift savings to you.",
  },
];

export default function FrameworkSection() {
  return (
    <section style={{ backgroundColor: "#F4F9F9", padding: "100px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          className="gradient-text font-[family-name:var(--font-inter)]"
          style={{
            fontSize: "56px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          The 4S Framework: Clarity in Every Step
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.badge} style={{ textAlign: "center" }}>
              <div className="circle-icon">{step.badge}</div>
              <h3
                className="font-[family-name:var(--font-inter)]"
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#00A6A6",
                  textTransform: "uppercase",
                  letterSpacing: "-0.5px",
                  marginBottom: "15px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  color: "#666666",
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
