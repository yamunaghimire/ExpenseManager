// import React from "react";

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const TimeFilterTabs = ({ selectedMonth, onSelectMonth }) => {
//   return (
//     <div className="flex overflow-x-auto space-x-3 py-2 px-1 mt-2 mb-4 scrollbar-hide mx-[20px]">
//       {months.map((month) => (
//         <button
//           key={month}
//           onClick={() => onSelectMonth(month)}
//           className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
//             selectedMonth === month
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           {month.slice(0, 3)}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default TimeFilterTabs;


import React from "react";
import { useTranslation } from "react-i18next";

const rawMonths = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
];

const TimeFilterTabs = ({ selectedMonth, onSelectMonth }) => {
  const { t } = useTranslation();

  return (
    <div className="flex overflow-x-auto space-x-3 py-2 px-1 mt-2 mb-4 scrollbar-hide mx-[20px]">
      {rawMonths.map((key, index) => {
        const fullMonth = t(`months.${key}`); // "January", "जनवरी", etc.
        const shortMonth = fullMonth.slice(0, 3); // "Jan" or "जन"

        return (
          <button
            key={fullMonth}
            onClick={() => onSelectMonth(fullMonth)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedMonth === fullMonth
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {shortMonth}
          </button>
        );
      })}
    </div>
  );
};

export default TimeFilterTabs;

