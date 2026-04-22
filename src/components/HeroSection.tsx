import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-center" style={{ background: "#F4F9F9", padding: "120px 20px" }}>
      <h1
        className="gradient-text font-[family-name:var(--font-inter)] font-bold"
        style={{
          fontSize: "64px",
          lineHeight: "70.4px",
          letterSpacing: "-0.5px",
          marginBottom: "20px",
        }}
      >
        Accelerate Your Path to Innovation
      </h1>
      <p
        style={{
          fontSize: "24px",
          color: "#666666",
          maxWidth: "800px",
          textAlign: "center",
          margin: "0 auto 40px",
        }}
      >
        We bridge the gap between innovation and adoption, transforming emerging technology into your competitive advantage.
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/hero.png"
          alt="ClearNova Hero"
          width={1000}
          height={600}
          className="w-full rounded-lg"
          style={{ maxWidth: "1000px" }}
          priority
        />
      </div>
    </section>
  );
}
