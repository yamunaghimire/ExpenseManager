// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FiArrowLeft, FiPlus } from "react-icons/fi";
// import {
//   FaShoppingCart,
//   FaUserAlt,
//   FaHeartbeat,
//   FaBook,
//   FaHome,
//   FaTshirt,
//   FaFilm,
//   FaEllipsisH,
// } from "react-icons/fa";

// import { useNavigate, useLocation } from "react-router-dom";

// // Icons map
// const categoryIcons = {
//   "Groceries": <FaShoppingCart className="text-lg text-green-600" />,
//   "Self Care": <FaUserAlt className="text-lg text-green-600" />,
//   "Health and Medicine": <FaHeartbeat className="text-lg text-green-600" />,
//   "Education": <FaBook className="text-lg text-green-600" />,
//   "Rent": <FaHome className="text-lg text-green-600" />,
//   "Clothing and Accesories": <FaTshirt className="text-lg text-green-600" />,
//   "Entertainment": <FaFilm className="text-lg text-green-600" />,
//   "Miscellaneous": <FaEllipsisH className="text-lg text-green-600" />
// };

// const months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];

// const BudgetPage = () => {
//   const [month, setMonth] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [budgets, setBudgets] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");
//   const [newCategory, setNewCategory] = useState("");
//   const [activeInputs, setActiveInputs] = useState({}); // 👈 track visible inputs

//   const navigate = useNavigate();
//   const location = useLocation();
//   const defaultMonth = location.state?.month || "";

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const token = localStorage.getItem("access_token");
//         const res = await axios.get("http://localhost:5000/api/categories", {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setCategories(res.data);
//       } catch (err) {
//         console.error("Failed to fetch categories", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     if (!month) return;

//     const fetchBudgets = async () => {
//       try {
//         const token = localStorage.getItem("access_token");
//         const res = await axios.get(`http://localhost:5000/api/budget/${month}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         const budgetMap = {};
//         res.data.forEach(b => {
//           budgetMap[b.category] = b.amount;
//         });
//         setBudgets(budgetMap);
//       } catch (err) {
//         console.error("Failed to fetch budgets", err);
//         setBudgets({});
//       }
//     };

//     fetchBudgets();
//   }, [month]);

//   useEffect(() => {
//     if (defaultMonth) setMonth(defaultMonth);
//   }, [defaultMonth]);

//   const handleAmountChange = (category, value) => {
//     setBudgets(prev => ({
//       ...prev,
//       [category]: value
//     }));
//   };

//   const toggleInput = (category) => {
//     setActiveInputs(prev => ({
//       ...prev,
//       [category]: !prev[category]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!month) {
//       alert("Please select a month.");
//       return;
//     }

//     setLoading(true);
//     setSubmitStatus("");

//     const payload = {
//       month,
//       budgets: categories
//         .filter(cat => budgets[cat.name] !== undefined && budgets[cat.name] !== "")
//         .map(cat => ({
//           category: cat.name,
//           amount: parseFloat(budgets[cat.name]) || 0
//         }))
//     };

//     try {
//       const token = localStorage.getItem("access_token");
//       await axios.post("http://localhost:5000/api/budget", payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setSubmitStatus("success");
//     } catch (err) {
//       console.error("Submit failed", err);
//       setSubmitStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddCategory = async () => {
//     if (!newCategory.trim()) return;

//     try {
//       const token = localStorage.getItem("access_token");
//       const res = await axios.post("http://localhost:5000/api/categories", {
//         name: newCategory.trim()
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       setCategories([...categories, res.data]);
//       setNewCategory("");
//     } catch (err) {
//       console.error("Failed to add category", err);
//       alert("Category already exists or something went wrong.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="flex items-center mb-4">
//         <FiArrowLeft
//           className="mr-2 text-2xl text-gray-700 cursor-pointer"
//           onClick={() => navigate('/')}
//         />
//         <h1 className="text-2xl font-bold text-gray-800">Set Monthly Budget</h1>
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-600 mb-1">Select Month</label>
//         <select
//           value={month}
//           onChange={(e) => setMonth(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         >
//           <option value="">Select Month</option>
//           {months.map(m => (
//             <option key={m} value={m}>{m}</option>
//           ))}
//         </select>
//       </div>

//       {/* Add New Category (with toggle button) */}
// <div className="mb-6">
//   {!newCategory ? (
//     <button
//       type="button"
//       onClick={() => setNewCategory("__init__")}
//       className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
//     >
//       <FiPlus className="text-xl" />
//       Add Category
//     </button>
//   ) : (
//     <div className="flex space-x-2">
//       <input
//         type="text"
//         value={newCategory === "__init__" ? "" : newCategory}
//         onChange={(e) => setNewCategory(e.target.value)}
//         placeholder="Enter category name"
//         className="flex-1 border border-gray-300 rounded px-3 py-2"
//       />
//       <button
//         type="button"
//         onClick={handleAddCategory}
//         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//       >
//         Add
//       </button>
//       <button
//         type="button"
//         onClick={() => setNewCategory("")}
//         className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
//       >
//         Cancel
//       </button>
//     </div>
//   )}
// </div>


//       {/* Budget Cards */}
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {categories.map((cat) => (
//             <div
//               key={cat.id}
//               className="p-4 bg-white rounded-xl shadow-md "
//             >
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2">
//                   {categoryIcons[cat.name] || <FaEllipsisH className="text-lg text-green-600" />}
//                   <span className="font-semibold text-gray-800 text-lg truncate">{cat.name}</span>
//                 </div>
//                 <FiPlus
//                   className="text-2xl text-gray-500 hover:text-green-600 cursor-pointer"
//                   onClick={() => toggleInput(cat.name)}
//                 />
//               </div>

//               {activeInputs[cat.name] && (
//                 <input
//                   type="number"
//                   placeholder="Amount"
//                   value={budgets[cat.name] || ""}
//                   onChange={(e) => handleAmountChange(cat.name, e.target.value)}
//                   className="mt-3 w-full px-3 py-2 rounded border border-gray-300 text-right focus:outline-none "
//                   min="0"
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg mt-6 text-lg font-semibold transition"
//         >
//           {loading ? "Saving..." : "Save Budget"}
//         </button>

//         {submitStatus === "success" && (
//           <p className="text-green-600 mt-3 text-center">Budgets saved successfully!</p>
//         )}
//         {submitStatus === "error" && (
//           <p className="text-red-600 mt-3 text-center">Failed to save budgets.</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default BudgetPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import {
  FaShoppingCart, FaUserAlt, FaHeartbeat, FaBook,
  FaHome, FaTshirt, FaFilm, FaEllipsisH
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ NEW

// Icons map
const categoryIcons = {
  "Groceries": <FaShoppingCart className="text-lg text-green-600" />,
  "Self Care": <FaUserAlt className="text-lg text-green-600" />,
  "Health and Medicine": <FaHeartbeat className="text-lg text-green-600" />,
  "Education": <FaBook className="text-lg text-green-600" />,
  "Rent": <FaHome className="text-lg text-green-600" />,
  "Clothing and Accesories": <FaTshirt className="text-lg text-green-600" />,
  "Entertainment": <FaFilm className="text-lg text-green-600" />,
  "Miscellaneous": <FaEllipsisH className="text-lg text-green-600" />
};

const BudgetPage = () => {
  const [month, setMonth] = useState("");
  const [categories, setCategories] = useState([]);
  const [budgets, setBudgets] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [activeInputs, setActiveInputs] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const defaultMonth = location.state?.month || "";
  const { t } = useTranslation(); // ✅ NEW

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await axios.get("http://localhost:5000/api/categories", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!month) return;

    const fetchBudgets = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await axios.get(`http://localhost:5000/api/budget/${month}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const budgetMap = {};
        res.data.forEach(b => {
          budgetMap[b.category] = b.amount;
        });
        setBudgets(budgetMap);
      } catch (err) {
        console.error("Failed to fetch budgets", err);
        setBudgets({});
      }
    };

    fetchBudgets();
  }, [month]);

  useEffect(() => {
    if (defaultMonth) setMonth(defaultMonth);
  }, [defaultMonth]);

  const handleAmountChange = (category, value) => {
    setBudgets(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const toggleInput = (category) => {
    setActiveInputs(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!month) {
      alert(t("please_select_month"));
      return;
    }

    setLoading(true);
    setSubmitStatus("");

    const payload = {
      month,
      budgets: categories
        .filter(cat => budgets[cat.name] !== undefined && budgets[cat.name] !== "")
        .map(cat => ({
          category: cat.name,
          amount: parseFloat(budgets[cat.name]) || 0
        }))
    };

    try {
      const token = localStorage.getItem("access_token");
      await axios.post("http://localhost:5000/api/budget", payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSubmitStatus("success");
    } catch (err) {
      console.error("Submit failed", err);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.post("http://localhost:5000/api/categories", {
        name: newCategory.trim()
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setCategories([...categories, res.data]);
      setNewCategory("");
    } catch (err) {
      console.error("Failed to add category", err);
      alert(t("category_exists_error"));
    }
  };

  const months = [
    t("months.jan"), t("months.feb"), t("months.mar"), t("months.apr"),
    t("months.may"), t("months.jun"), t("months.jul"), t("months.aug"),
    t("months.sep"), t("months.oct"), t("months.nov"), t("months.dec")
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <FiArrowLeft
          className="mr-2 text-2xl text-gray-700 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <h1 className="text-2xl font-bold text-gray-800">{t("set_monthly_budget")}</h1>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 mb-1">{t("select_month")}</label>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        >
          <option value="">{t("select_month")}</option>
          {months.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        {!newCategory ? (
          <button
            type="button"
            onClick={() => setNewCategory("__init__")}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
          >
            <FiPlus className="text-xl" />
            {t("add_category")}
          </button>
        ) : (
          <div className="flex space-x-2">
            <input
              type="text"
              value={newCategory === "__init__" ? "" : newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder={t("enter_category_name")}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              {t("add")}
            </button>
            <button
              type="button"
              onClick={() => setNewCategory("")}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              {t("cancel")}
            </button>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="p-4 bg-white rounded-xl shadow-md ">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {categoryIcons[cat.name] || <FaEllipsisH className="text-lg text-green-600" />}
                  <span className="font-semibold text-gray-800 text-lg truncate">{cat.name}</span>
                </div>
                <FiPlus
                  className="text-2xl text-gray-500 hover:text-green-600 cursor-pointer"
                  onClick={() => toggleInput(cat.name)}
                />
              </div>
              {activeInputs[cat.name] && (
                <input
                  type="number"
                  placeholder={t("amount")}
                  value={budgets[cat.name] || ""}
                  onChange={(e) => handleAmountChange(cat.name, e.target.value)}
                  className="mt-3 w-full px-3 py-2 rounded border border-gray-300 text-right focus:outline-none "
                  min="0"
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg mt-6 text-lg font-semibold transition"
        >
          {loading ? t("saving") : t("save_budget")}
        </button>

        {submitStatus === "success" && (
          <p className="text-green-600 mt-3 text-center">{t("save_success")}</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 mt-3 text-center">{t("save_error")}</p>
        )}
      </form>
    </div>
  );
};

export default BudgetPage;
