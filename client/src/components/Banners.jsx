import React from "react";
import { useNavigate } from "react-router-dom";

const iconStyle = {
  width: 24,
  height: 24,
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: 8,
};

const buttonBase = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 999,
  fontWeight: 500,
  fontSize: 18, // Slightly smaller for mobile
  padding: "0.7em 1.2em",
  border: "none",
  cursor: "pointer",
  margin: "0.3em 9px", // Updated margin x to 9px
  transition: "background 0.2s, color 0.2s",
};

const outlinedBtn = {
  ...buttonBase,
  background: "#f3f4f6",
  color: "#111",
};
const filledBtn = {
  ...buttonBase,
  background: "#111",
  color: "#fff",
};
const iconOnlyBtn = {
  ...buttonBase,
  background: "#111",
  color: "#fff",
  padding: "0.7em 1em",
  minWidth: 48, // Slightly smaller for mobile
};

// Responsive styles using a hook
function useResponsiveStyles() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 600);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    container: {
      width: "100%",
      maxWidth: 500,
      margin: "0 auto",
      padding: isMobile ? "0 0.5em" : undefined,
    },
    banner: {
      background: "#e7f4ef",
      color: "#111",
      borderRadius: 24,
      padding: isMobile ? "1em 1em" : "1.2em 1.5em",
      fontWeight: 600,
      fontSize: isMobile ? 18 : 24,
      marginBottom: isMobile ? 16 : 24,
      textAlign: "left",
    },
    buttonRow: {
      display: "flex",
      flexDirection: "row", // Always row
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10, // consistent gap
    },
    button: {
      width: isMobile ? "100%" : undefined,
      margin: isMobile ? "0.2em 0" : "0 9px", // Updated margin x to 9px
      fontSize: isMobile ? 16 : 20,
      padding: isMobile ? "0.7em 1em" : "0.7em 1.5em",
    },
    iconOnlyBtn: {
      minWidth: isMobile ? 44 : 56,
      padding: isMobile ? "0.7em 0.7em" : "0.7em 1em",
      margin: isMobile ? "0.2em 0" : "0 9px", // Updated margin x to 9px
    },
  };
}

export default function Banners() {
  const styles = useResponsiveStyles();
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      {/* <div style={styles.banner}>
        गत महिनाको तुलनामा २०% बढी बचत
      </div> */}
      <div style={styles.buttonRow}>
        <button style={{ ...outlinedBtn, ...styles.button }} onClick={() => navigate('/learn')}>
          <span style={iconStyle}>
            {/* Search Icon */}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
          ज्ञान कुना
        </button>
        <button style={{ ...filledBtn, ...styles.button }} onClick={() => navigate('/budget-overview')}>
          <span style={iconStyle}>
            {/* Arrow Icon */}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
          अन्तर्दृष्टि
        </button>
        <button style={{ ...outlinedBtn, ...styles.button }} onClick={() => navigate('/trending')}>
          <span style={iconStyle}>
            {/* Scanner Icon */}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </span>
          अफर
        </button>
      </div>
    </div>
  );
}
