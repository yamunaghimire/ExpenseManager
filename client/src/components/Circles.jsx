import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const categories = [
  { name: "खाद्यान्न", spent: 300, budget: 500 }, // Groceries
  { name: "मनोरञ्जन", spent: 150, budget: 200 }, // Entertainment
  { name: "यातायात", spent: 80, budget: 100 },   // Transport
  { name: "किनमेल", spent: 250, budget: 300 },   // Shopping
];

// Helper to convert English numbers to Nepali numerals
function toNepaliNumber(num) {
  const nepaliDigits = ['०','१','२','३','४','५','६','७','८','९','.'];
  return num.toString().split('').map(ch => {
    if (ch === '.') return nepaliDigits[10];
    return /[0-9]/.test(ch) ? nepaliDigits[parseInt(ch)] : ch;
  }).join('');
}

const Circles = () => {
  const [animatedPercents, setAnimatedPercents] = useState(categories.map(() => 0));

  useEffect(() => {
    // Animate each circle to its target percent
    const targetPercents = categories.map(cat => ((cat.spent / cat.budget) * 100));
    let frame;
    let start;
    const duration = 900; // ms

    function animate(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setAnimatedPercents(targetPercents.map(p => +(p * progress).toFixed(2)));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setAnimatedPercents(targetPercents.map(p => +p.toFixed(2)));
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 24,
        padding: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        maxWidth: 420,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {categories.map((cat, idx) => {
        const percent = animatedPercents[idx];
        return (
          <div
            key={cat.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: idx !== categories.length - 1 ? 32 : 0,
              width: "100%",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flex: 1 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  marginBottom: 8,
                  lineHeight: 1.1,
                }}
              >
                {cat.name}
              </div>
              <div style={{ width: 90, height: 90 }}>
                <CircularProgressbar
                  value={percent}
                  text={`${toNepaliNumber(percent.toFixed(2))}%`}
                  styles={buildStyles({
                    textColor: "#000",
                    pathColor: "#00C853",
                    trailColor: "#e0e0e0",
                    textSize: "22px",
                    strokeLinecap: "round",
                    fontWeight: 700,
                  })}
                />
              </div>
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: 20,
                textAlign: "right",
                minWidth: 110,
                marginLeft: 8,
              }}
            >
              Rs {toNepaliNumber(cat.spent)} / Rs {toNepaliNumber(cat.budget)}
            </div>
          </div>
        );
      })}
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          .category-row {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 8px;
          }
          .amount {
            text-align: left !important;
            margin-left: 0 !important;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Circles;
