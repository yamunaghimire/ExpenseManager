// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
// } from "chart.js";

// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

// const monthOrder = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const SpendingTrendChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchMonthlyExpenses = async () => {
//       try {
//         const token = localStorage.getItem("access_token");
//         const res = await axios.get("http://localhost:5000/api/expenses/monthly", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         // Sort months to ensure correct order
//         const sorted = res.data.sort(
//           (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
//         );

//         setData(sorted);
//       } catch (err) {
//         console.error("Failed to fetch monthly expenses", err);
//       }
//     };

//     fetchMonthlyExpenses();
//   }, []);

//   const chartData = {
//     labels: data.map(d => d.month.slice(0, 3)), // ['Jan', 'Feb', ...]
//     datasets: [
//       {
//         label: "Spending",
//         data: data.map(d => d.amount),
//         borderColor: "#A855F7",           // purple
//         backgroundColor: "#A855F7",       // dot color
//         borderWidth: 2,
//         tension: 0.4,                     // smooth curve
//         pointRadius: 5,
//         pointHoverRadius: 6,
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: false } },
//     scales: {
//       x: {
//         ticks: {
//           color: "#4B5563",
//           font: { size: 12 },
//         },
//         grid: { display: false },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: "#6B7280",
//           font: { size: 12 },
//         },
//         grid: {
//           color: "#E5E7EB",
//           drawBorder: false,
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-medium mt-7  mx-[20px] p-0">Spending Trend</h2>

//     <div className="bg-white p-4 rounded-lg  mt-2 h-72 ">
      
//       {data.length === 0 ? (
//         <p className="text-center text-gray-400">No expense data to display.</p>
//       ) : (
//         <Line data={chartData} options={options} />
//       )}
//     </div>
//     </div>
//   );
// };

// export default SpendingTrendChart;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { convertToNepaliDigits } from "../utils/numberUtils";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const monthKeys = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
];

const SpendingTrendChart = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMonthlyExpenses = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await axios.get("http://localhost:5000/api/expenses/monthly", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const sorted = res.data.sort(
          (a, b) => monthKeys.indexOf(a.month) - monthKeys.indexOf(b.month)
        );

        setData(sorted);
      } catch (err) {
        console.error("Failed to fetch monthly expenses", err);
      }
    };

    fetchMonthlyExpenses();
  }, []);

  const chartData = {
    labels: monthKeys.map((key) => t(`months.${key}`)),
    datasets: [
      {
        label: t('spent'),
        data: data.map(d => i18n.language === 'ne' ? Number(convertToNepaliDigits(d.amount)) : d.amount),
        borderColor: "#A855F7",
        backgroundColor: "#A855F7",
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
          callback: function(value) {
            return i18n.language === 'ne' ? convertToNepaliDigits(value) : value;
          }
        },
        grid: {
          color: "#E5E7EB",
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-3xl font-medium mt-7 mx-[20px] p-0">{t('spending_trend')}</h2>

      <div className="bg-white p-4 rounded-lg mt-2 h-72">
        {data.length === 0 ? (
          <p className="text-center text-gray-400">{t('no_expense_data')}</p>
        ) : (
          <Line data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default SpendingTrendChart;

