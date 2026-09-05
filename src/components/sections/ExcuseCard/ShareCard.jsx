// src/components/sections/ExcuseCard/ShareCard.jsx
// Rendered off-screen and captured by html2canvas.
// Styling must stay INLINE (html2canvas cannot resolve CSS variables).

export default function ShareCard({ excuse, situation, tone, cardRef }) {
  return (
    <div
      ref={cardRef}
      style={{
        position: "fixed",
        left: "-9999px",
        top: 0,
        width: "600px",
        background: "#fbf8ef",
        border: "2px solid #1c1810",
        borderRadius: "12px",
        boxShadow: "10px 10px 0 0 #1c1810",
        padding: "34px 44px",
        fontFamily:
          "'Space Grotesk', Inter, ui-sans-serif, system-ui, sans-serif",
        color: "#1c1810",
      }}
    >
      {/* top row: wordmark + tag */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 26,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          excusify<span style={{ color: "#809b25" }}>.</span>
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#544b39",
            border: "1.5px solid #d8ceb6",
            borderRadius: 6,
            padding: "4px 8px",
          }}
        >
          {situation}
        </span>
      </div>

      {/* the excuse */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 26,
            fontWeight: 700,
            color: "#809b25",
            marginTop: 2,
            flexShrink: 0,
          }}
        >
          $
        </span>
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: 25,
            lineHeight: 1.55,
            margin: 0,
            color: "#1c1810",
            whiteSpace: "pre-wrap",
          }}
        >
          {excuse}
        </p>
      </div>

      {/* footer */}
      <div
        style={{
          marginTop: 30,
          borderTop: "2px dashed #d8ceb6",
          paddingTop: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#544b39",
          }}
        >
          {situation} · {tone}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "#8e8471",
          }}
        >
          excusify.vercel.app
        </span>
      </div>
    </div>
  );
}
