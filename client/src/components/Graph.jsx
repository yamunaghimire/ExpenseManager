import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { convertToNepaliDigits } from "../utils/numberUtils";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

// Nepali month names (from i18n.js)
const nepaliMonths = [
  "जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन",
  "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"
];

// Dummy data for each month (in rupees)
const dummyData = [
  1200, 950, 1800, 2100, 1600, 1750, 2000, 2200, 1950, 1850, 1700, 2050
];

const chartData = {
  labels: nepaliMonths,
  datasets: [
    {
      label: "महिना अनुसार खर्च (रु)",
      data: dummyData,
      borderColor: "#00C853",
      backgroundColor: "#00C853",
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 6,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: {
      ticks: {
        color: "#4B5563",
        font: { size: 12 },
      },
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "#6B7280",
        font: { size: 12 },
        callback: function (value) {
          return convertToNepaliDigits(value);
        },
      },
      grid: {
        color: "#E5E7EB",
        drawBorder: false,
      },
    },
  },
};

const Graph = () => {
  return (
    <div>
      <h2 className="text-2xl font-medium mt-7 mx-[20px] p-0">महिना अनुसार खर्च</h2>
      <div className="bg-white p-4 rounded-lg mt-2 h-72">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Graph;
