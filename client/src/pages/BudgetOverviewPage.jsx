// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import BudgetVisualizer from "../components/BudgetVisualizer";
// // import { FiArrowLeft } from "react-icons/fi";
// // import { useNavigate } from "react-router-dom";

// // const months = [
// //   "January", "February", "March", "April",
// //   "May", "June", "July", "August",
// //   "September", "October", "November", "December"
// // ];

// // const BudgetOverviewPage = () => {
// //   const [month, setMonth] = useState("");
// //   const [budgets, setBudgets] = useState({});
// //   const [expenses, setExpenses] = useState({});
// //   const navigate = useNavigate();


// //   useEffect(() => {
// //     if (!month) return;

// //     const fetchBudgets = async () => {
// //       const token = localStorage.getItem("access_token");
// //       const res = await axios.get(`http://localhost:5000/api/budget/${month}`, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
// //       const map = {};
// //       res.data.forEach(b => map[b.category] = b.amount);
// //       setBudgets(map);
// //     };

// //     const fetchExpenses = async () => {
// //       const token = localStorage.getItem("access_token");
// //       const res = await axios.get(`http://localhost:5000/api/expenses/${month}`, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
// //       const map = {};
// //       res.data.forEach(e => map[e.category] = e.amount);
// //       setExpenses(map);
// //     };

// //     fetchBudgets();
// //     fetchExpenses();
// //   }, [month]);

// //   return (
// //     <div className="p-4 max-w-xl mx-auto">
// //       <div className="relative flex items-center justify-center mb-4">
// //   <FiArrowLeft
// //     className="absolute left-0 text-2xl text-gray-700 cursor-pointer"
// //     onClick={() => navigate("/")}
// //   />
// //   <h1 className="text-2xl font-bold text-center">Budget Overview</h1>
// // </div>


// //       <div className="mb-6 mt-4">
// //         {/* <label className="block text-gray-600 mb-1">Select Month</label> */}
// //         <select
// //           value={month}
// //           onChange={(e) => setMonth(e.target.value)}
// //           className="border border-gray-300 rounded px-3 py-2 w-full font-bold text-xl text-center"
// //         >
// //           <option value="">Select Month</option>
// //           {months.map(m => (
// //             <option key={m} value={m}>{m}</option>
// //           ))}
// //         </select>
// //       </div>

// //       {month && (
// //         <BudgetVisualizer
// //           month={month}
// //           budgets={budgets}
// //           expenses={expenses}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default BudgetOverviewPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BudgetVisualizer from "../components/BudgetVisualizer";
// import { FiArrowLeft } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // ✅ NEW

// const BudgetOverviewPage = () => {
//   const [month, setMonth] = useState("");
//   const [budgets, setBudgets] = useState({});
//   const [expenses, setExpenses] = useState({});
//   const navigate = useNavigate();
//   const { t } = useTranslation(); // ✅ NEW

//   useEffect(() => {
//     if (!month) return;

//     const fetchBudgets = async () => {
//       const token = localStorage.getItem("access_token");
//       const res = await axios.get(`http://localhost:5000/api/budget/${month}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const map = {};
//       res.data.forEach(b => map[b.category] = b.amount);
//       setBudgets(map);
//     };

//     const fetchExpenses = async () => {
//       const token = localStorage.getItem("access_token");
//       const res = await axios.get(`http://localhost:5000/api/expenses/${month}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const map = {};
//       res.data.forEach(e => map[e.category] = e.amount);
//       setExpenses(map);
//     };

//     fetchBudgets();
//     fetchExpenses();
//   }, [month]);

//   // 🔁 translated months
//   const months = [
//     t("months.jan"), t("months.feb"), t("months.mar"), t("months.apr"),
//     t("months.may"), t("months.jun"), t("months.jul"), t("months.aug"),
//     t("months.sep"), t("months.oct"), t("months.nov"), t("months.dec")
//   ];

//   return (
//     <div className="p-4 max-w-xl mx-auto">
//       <div className="relative flex items-center justify-center mb-4">
//         <FiArrowLeft
//           className="absolute left-0 text-2xl text-gray-700 cursor-pointer"
//           onClick={() => navigate("/")}
//         />
//         <h1 className="text-2xl font-bold text-center">{t("budget_overview")}</h1>
//       </div>

//       <div className="mb-6 mt-4">
//         <select
//           value={month}
//           onChange={(e) => setMonth(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2 w-full font-bold text-xl text-center"
//         >
//           <option value="">{t("select_month")}</option>
//           {months.map(m => (
//             <option key={m} value={m}>{m}</option>
//           ))}
//         </select>
//       </div>

//       {month && (
//         <BudgetVisualizer
//           month={month}
//           budgets={budgets}
//           expenses={expenses}
//         />
//       )}
//     </div>
//   );
// };

// export default BudgetOverviewPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import BudgetVisualizer from "../components/BudgetVisualizer";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BudgetOverviewPage = () => {
  const [month, setMonth] = useState("");
  const [budgets, setBudgets] = useState({});
  const [expenses, setExpenses] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();

  // 🧠 Fixed list of internal month keys
  const monthKeys = [
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec"
  ];

  // ✅ Get translated labels
  const monthLabels = monthKeys.map((key) => t(`months.${key}`));

  useEffect(() => {
    if (!month) return;

    const fetchBudgets = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await axios.get(`http://localhost:5000/api/budget/${month}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const map = {};
        res.data.forEach((b) => (map[b.category] = b.amount));
        setBudgets(map);
      } catch (err) {
        console.error("Failed to fetch budgets", err.response?.data || err.message);
      }
    };

    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await axios.get(`http://localhost:5000/api/expenses/${month}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const map = {};
        res.data.forEach((e) => (map[e.category] = e.amount));
        setExpenses(map);
      } catch (err) {
        console.error("Failed to fetch expenses", err.response?.data || err.message);
      }
    };

    fetchBudgets();
    fetchExpenses();
  }, [month]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="relative flex items-center justify-center mb-4">
        <FiArrowLeft
          className="absolute left-0 text-2xl text-gray-700 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="text-2xl font-bold text-center">{t("budget_overview")}</h1>
      </div>

      <div className="mb-6 mt-4">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full font-bold text-xl text-center"
        >
          <option value="">{t("select_month")}</option>
          {monthKeys.map((key, index) => (
            <option key={key} value={key}>
              {monthLabels[index]}
            </option>
          ))}
        </select>
      </div>

      {month && (
        <BudgetVisualizer
          month={month}
          budgets={budgets}
          expenses={expenses}
        />
      )}
    </div>
  );
};

export default BudgetOverviewPage;

