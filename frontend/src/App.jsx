import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        background:
          "linear-gradient(135deg, #00338D 0%, #005EB8 50%, #1D428A 100%)",
        fontFamily: "Segoe UI, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}

<div
  style={{
    width: sidebarOpen ? "260px" : "70px",
    transition: "0.3s ease",
    background:
  "linear-gradient(180deg, rgba(3,18,52,0.98), rgba(5,35,90,0.95))",
  boxShadow: "0 0 25px rgba(0,0,0,0.35)",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    flexShrink: 0,
  }}
>
  {/* Top Right Menu Button */}

  <div
    style={{
      display: "flex",
      justifyContent: sidebarOpen ? "flex-end" : "center",
      marginBottom: "20px",
    }}
  >
    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      style={{
        background: "transparent",
        border: "none",
        color: "white",
        fontSize: "22px",
        cursor: "pointer",
      }}
    >
      ☰
    </button>
  </div>

  {sidebarOpen && (
    <>
      <h2
        style={{
          color: "white",
          marginTop: "10px",
          marginBottom: "20px",
          lineHeight: "1.2",
        }}
      >
        Knowledge Assistant
      </h2>

      <button
        style={{
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "#00338D",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 0 15px rgba(255,255,255,0.15)",
}}
      >
        + New Chat
      </button>
    </>
  )}
</div>

      {/* Main Content */}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        {/* Landing State */}

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "42px",
              marginBottom: "10px",
            }}
          >
            How may I help you today?
          </h1>

          <p
            style={{
              color: "#dbeafe",
              fontSize: "16px",
              marginBottom: "50px",
            }}
          >
            Transforming Information into Insight
          </p>
        </div>

        {/* Input Area */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Ask anything..."
            style={{
              flex: 1,
              height: "70px",
              padding: "0 24px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "18px",
              outline: "none",
            }}
          />

          <button
            style={{
              width: "180px",
              borderRadius: "18px",
              border: "none",
              background: "white",
              color: "#00338D",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;