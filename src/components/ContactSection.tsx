"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px",
    border: "1px solid #e2e2e2",
    borderRadius: 4,
    fontSize: 16,
    color: "#474747",
    background: "white",
    boxSizing: "border-box",
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      {/* Part A: CTA heading */}
      <div style={{ padding: "100px 20px 0", maxWidth: 1100, margin: "0 auto" }}>
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
          Connect with ClearNova today.
        </h2>
      </div>

      {/* Part B: Contact Form */}
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 20px" }}>
        <h3
          className="font-[family-name:var(--font-inter)]"
          style={{
            fontSize: 22,
            fontWeight: 400,
            lineHeight: 1.25,
            textAlign: "center",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Are you ready to de-risk your next building technology deployment and
          gain absolute clarity?
        </h3>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Message *"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
          />

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button
              type="submit"
              style={{
                background: "black",
                color: "white",
                padding: "8px 40px",
                borderRadius: 48,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#333";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "black";
              }}
            >
              SUBMIT
            </button>
          </div>

          <p
            style={{
              fontSize: 12,
              color: "#666",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </form>
      </div>
    </section>
  );
}
