// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { FaWallet, FaPiggyBank } from "react-icons/fa";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const BudgetVisualizer = ({ month, budgets, expenses }) => {
//   const totalBudget = Object.values(budgets).reduce((sum, amt) => sum + (amt || 0), 0);
//   const totalSpent = Object.entries(budgets).reduce(
//     (sum, [category]) => sum + (expenses[category] || 0),
//     0
//   );
//   const remaining = totalBudget - totalSpent;
//   const isExceeded = remaining < 0;

//   const donutData = {
//     labels: ["Spent", "Remaining"],
//     datasets: [
//       {
//         data: [totalSpent, Math.max(remaining, 0)],
//         backgroundColor: ["#3B82F6", "#10B981"],
//         borderWidth: 2,
//         hoverOffset: 6,
//       },
//     ],
//   };

//   return (
//     <div className="bg-white rounded-lg p-6 shadow-md mt-6">
      
//       {/* <h2 className="text-xl font-bold mb-6 text-center">{month} Budget Overview</h2> */}

//       {/* Donut Chart */}
//       <div className="flex justify-center mb-6">
//         <div className="w-52 h-52">
//           <Doughnut data={donutData} />
//         </div>
//       </div>

//       {/* Spent & Remaining Cards */}
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm flex items-center">
//           <FaWallet className="text-blue-600 text-2xl mr-3" />
//           <div>
//             <p className="text-sm text-gray-700">Total Spent</p>
//             <p className="text-lg font-bold text-blue-800">Rs {totalSpent.toFixed(2)}</p>
//           </div>
//         </div>
//         <div className={`p-4 rounded-lg shadow-sm flex items-center ${
//           isExceeded ? "bg-red-100 border-l-4 border-red-500" : "bg-green-100 border-l-4 border-green-500"
//         }`}>
//           <FaPiggyBank className={`text-2xl mr-3 ${
//             isExceeded ? "text-red-600" : "text-green-600"
//           }`} />
//           <div>
//             <p className="text-sm text-gray-700">Budget Remaining</p>
//             <p className={`text-lg font-bold ${
//               isExceeded ? "text-red-700" : "text-green-800"
//             }`}>
//               {isExceeded ? `-Rs ${Math.abs(remaining).toFixed(2)} (Exceeded)` : `Rs ${remaining.toFixed(2)}`}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Category Breakdown */}
//       <div className="space-y-4">
//         {Object.entries(budgets).map(([category, budgetAmt]) => {
//           const actualAmt = expenses[category] || 0;
//           const percentage = Math.min((actualAmt / budgetAmt) * 100, 100);
//           const overBudget = actualAmt > budgetAmt;

//           return (
//             <div key={category} className="bg-gray-50 rounded-lg p-4 shadow-sm">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-semibold">{category}</span>
//                 <span
//                   className={`font-semibold ${
//                     overBudget ? "text-red-600" : "text-green-700"
//                   }`}
//                 >
//                   Rs {actualAmt} / Rs {budgetAmt}
//                 </span>
//               </div>
//               <div className="w-full h-3 bg-gray-200 rounded-full">
//                 <div
//                   className={`h-full rounded-full ${
//                     overBudget ? "bg-red-500" : "bg-green-500"
//                   }`}
//                   style={{ width: `${percentage}%` }}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BudgetVisualizer;


import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FaWallet, FaPiggyBank } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // ✅ i18n

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetVisualizer = ({ month, budgets, expenses }) => {
  const { t } = useTranslation(); // ✅ hook

  const totalBudget = Object.values(budgets).reduce((sum, amt) => sum + (amt || 0), 0);
  const totalSpent = Object.entries(budgets).reduce(
    (sum, [category]) => sum + (expenses[category] || 0),
    0
  );
  const remaining = totalBudget - totalSpent;
  const isExceeded = remaining < 0;

  const donutData = {
    labels: [t("spent"), t("remaining")],
    datasets: [
      {
        data: [totalSpent, Math.max(remaining, 0)],
        backgroundColor: ["#3B82F6", "#10B981"],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md mt-6">
      {/* Donut Chart */}
      <div className="flex justify-center mb-6">
        <div className="w-52 h-52">
          <Doughnut data={donutData} />
        </div>
      </div>

      {/* Spent & Remaining */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm flex items-center">
          <FaWallet className="text-blue-600 text-2xl mr-3" />
          <div>
            <p className="text-sm text-gray-700">{t("total_spent")}</p>
            <p className="text-lg font-bold text-blue-800">
              Rs {totalSpent.toFixed(2)}
            </p>
          </div>
        </div>
        <div
          className={`p-4 rounded-lg shadow-sm flex items-center ${
            isExceeded
              ? "bg-red-100 border-l-4 border-red-500"
              : "bg-green-100 border-l-4 border-green-500"
          }`}
        >
          <FaPiggyBank
            className={`text-2xl mr-3 ${
              isExceeded ? "text-red-600" : "text-green-600"
            }`}
          />
          <div>
            <p className="text-sm text-gray-700">{t("budget_remaining")}</p>
            <p
              className={`text-lg font-bold ${
                isExceeded ? "text-red-700" : "text-green-800"
              }`}
            >
              {isExceeded
                ? `-Rs ${Math.abs(remaining).toFixed(2)} (${t("exceeded")})`
                : `Rs ${remaining.toFixed(2)}`}
            </p>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="space-y-4">
        {Object.entries(budgets).map(([category, budgetAmt]) => {
          const actualAmt = expenses[category] || 0;
          const percentage = Math.min((actualAmt / budgetAmt) * 100, 100);
          const overBudget = actualAmt > budgetAmt;

          return (
            <div key={category} className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{category}</span>
                <span
                  className={`font-semibold ${
                    overBudget ? "text-red-600" : "text-green-700"
                  }`}
                >
                  Rs {actualAmt} / Rs {budgetAmt}
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div
                  className={`h-full rounded-full ${
                    overBudget ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetVisualizer;
