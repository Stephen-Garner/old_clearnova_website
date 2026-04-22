const values = [
  {
    icon: "fas fa-user",
    title: "Independent",
    description: "Neutrality is your greatest advantage.",
  },
  {
    icon: "fas fa-handshake",
    title: "Pro-Client",
    description: "Every recommendation serves your goals.",
  },
  {
    icon: "fas fa-clock",
    title: "Future-ready",
    description: "We stay ahead of emerging technologies.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Risk-Managed",
    description: "A structured adoption process eliminates guesswork.",
  },
];

export default function ValuesSection() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "100px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          className="gradient-text font-[family-name:var(--font-inter)]"
          style={{
            fontSize: "56px",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Choose ClearNova
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} style={{ textAlign: "center" }}>
              <div className="value-icon-circle">
                <i className={value.icon} />
              </div>
              <h4
                className="font-[family-name:var(--font-inter)]"
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#00A6A6",
                  letterSpacing: "-0.5px",
                  marginBottom: "10px",
                }}
              >
                {value.title}
              </h4>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  lineHeight: 1.6,
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
