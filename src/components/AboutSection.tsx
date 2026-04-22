import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white" style={{ padding: "100px 20px" }}>
      <div
        className="mx-auto flex flex-col md:flex-row items-center"
        style={{ maxWidth: "1100px", gap: "60px" }}
      >
        {/* Left column - text */}
        <div className="md:w-[55%] w-full">
          <h2
            className="gradient-text font-extrabold font-[family-name:var(--font-inter)]"
            style={{
              fontSize: "56px",
              lineHeight: "1.6",
              letterSpacing: "-0.5px",
              marginBottom: "25px",
            }}
          >
            Who Is ClearNova
          </h2>
          <p style={{ fontSize: "18px", color: "#666666", lineHeight: "1.6" }}>
            ClearNova is a boutique advisory firm that helps organizations adopt building
            technologies with <strong>clarity, confidence, and control</strong>.
          </p>
          <p style={{ fontSize: "18px", color: "#666666", lineHeight: "1.6", marginTop: "16px" }}>
            We partner with commercial developers, asset managers, and operations groups,
            providing expertise in navigating the complex technology landscape. We bridge the
            gap between technical innovation and practical business application.
          </p>
          <div
            style={{
              width: "100px",
              height: "5px",
              background: "#00A6A6",
              marginTop: "30px",
            }}
          />
        </div>

        {/* Right column - image */}
        <div className="md:w-[45%] w-full">
          <Image
            src="/images/about.png"
            alt="About ClearNova"
            width={500}
            height={600}
            className="w-full object-cover rounded-xl"
            style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          />
        </div>
      </div>
    </section>
  );
}
