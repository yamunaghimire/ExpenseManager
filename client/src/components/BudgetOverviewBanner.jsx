// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaChartPie } from "react-icons/fa";  // ✅ Correct icon name

// const BudgetOverviewBanner = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/budget-overview"); // Adjust path as needed
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="bg-green-100 hover:bg-green-200 cursor-pointer rounded-lg mx-5 p-4 mt-4 shadow-md flex items-center justify-between transition duration-200"
//     >
//       <div>
//         <h2 className="text-lg font-semibold text-green-800 mb-1">View Budget Overview</h2>
//         {/* <p className="text-sm text-green-700">See how you're tracking your monthly budgets</p> */}
//       </div>
//       <FaChartPie className="text-2xl text-green-700" />
//     </div>
//   );
// };

// export default BudgetOverviewBanner;


import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // ✅ i18n

const BudgetOverviewBanner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ hook

  const handleClick = () => {
    navigate("/budget-overview");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-green-100 hover:bg-green-200 cursor-pointer rounded-lg mx-5 p-4 mt-4 shadow-md flex items-center justify-between transition duration-200"
    >
      <div>
        <h2 className="text-lg font-semibold text-green-800 mb-1">
          {t("view_budget_overview")}
        </h2>
        {/* Optional subtext */}
        {/* <p className="text-sm text-green-700">{t("budget_overview_subtext")}</p> */}
      </div>
      <FaChartPie className="text-2xl text-green-700" />
    </div>
  );
};

export default BudgetOverviewBanner;

