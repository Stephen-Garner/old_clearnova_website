import Image from "next/image";

const solutions = [
  { title: "IoT Smart Sensors", image: "/images/solution-sensors.png" },
  { title: "Advanced Screening", image: "/images/solution-screening.png" },
  { title: "Cloud Intercoms", image: "/images/solution-intercoms.png" },
  { title: "Smart Infrastructure", image: "/images/solution-infrastructure.png" },
];

export default function SolutionsSection() {
  return (
    <section style={{ backgroundColor: "#F4F9F9", padding: "100px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          className="gradient-text font-[family-name:var(--font-inter)]"
          style={{
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          Solutions Expertise
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 30 }}
        >
          {solutions.map((item) => (
            <div key={item.title}>
              <h4
                className="font-[family-name:var(--font-inter)]"
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#00A6A6",
                  letterSpacing: "-0.5px",
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h4>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={360}
                className="w-full object-cover"
                style={{ borderRadius: 8, aspectRatio: "5 / 3" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
