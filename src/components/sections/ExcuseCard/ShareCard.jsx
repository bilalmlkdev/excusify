// src/components/sections/ExcuseCard/ShareCard.jsx
// Note: This component is rendered off-screen and captured by html2canvas.
// Keep styling inline to ensure html2canvas captures consistent fonts/colors.

export default function ShareCard({ excuse, situation, tone, cardRef }) {
  return (
    <div
      ref={cardRef}
      style={{
        position: "fixed",
        left: "-9999px",
        top: 0,
        width: "600px",
        background: "#0f1724",
        borderRadius: "16px",
        padding: "32px 46px",
        fontFamily:
          "Inter, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
        border: "1px solid rgba(255,255,255,0.03)",
        color: "#e6eef8",
      }}
    >
      {/* Excuse with prompt symbol */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <span
          style={{
            color: "#34d399",
            fontSize: 15,
            marginTop: 2,
            flexShrink: 0,
          }}
        >
          $
        </span>
        <p
          style={{
            color: "#eef2ff",
            fontSize: 16,
            lineHeight: 1.6,
            margin: 0,
            whiteSpace: "pre-wrap",
          }}
        >
          {excuse}
        </p>
      </div>

      {/* Footer – situation, tone, and URL */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.03)",
          paddingTop: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span
            style={{
              fontSize: 11,
              color: "#34d399",
            }}
          >
            {situation}
          </span>
          <span
            style={{
              fontSize: 11,
              color: "#93a0b3",
            }}
          >
            {tone}
          </span>
        </div>
        <span style={{ fontSize: 11, color: "#6b7480", letterSpacing: 0.5 }}>
          excusify.vercel.app
        </span>
      </div>
    </div>
  );
}
