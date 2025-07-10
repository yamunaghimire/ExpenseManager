import React from "react";
import { useTranslation } from "react-i18next";
import { FiFileText, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { convertToNepaliDigits } from "../utils/numberUtils";

const receipts = [
  {
    billNumber: "TI130977-PAT-081/82",
    date: "2025-06-14",
    amount: 7933.10,
  },
  {
    billNumber: "TI130977-PAT-081/82",
    date: "2025-06-14",
    amount: 7933.10,
  },
  {
    billNumber: "TI130977-PAT-081/82",
    date: "2025-06-14",
    amount: 7933.10,
  },
  {
    billNumber: "TI130977-PAT-081/82",
    date: "2025-06-14",
    amount: 7933.10,
  },
  {
    billNumber: "TI130977-PAT-081/82",
    date: "2025-06-14",
    amount: 7933.10,
  },
  {
    billNumber: "TI130977-PAT-081/82",
    date: "2025-06-14",
    amount: 7933.10,
  },
  {
    billNumber: "TI130977-PAT-081/82",
    date: "2025-06-14",
    amount: 7933.10,
  },
  {
    billNumber: "TI130977-PAT-081/82",
    date: "2025-06-14",
    amount: 7933.10,
  },
];

function formatDateNepali(dateStr) {
  // Format: YYYY-MM-DD to YYYY/MM/DD in Nepali digits
  const [year, month, day] = dateStr.split("-");
  return `${convertToNepaliDigits(year)}/${convertToNepaliDigits(month)}/${convertToNepaliDigits(day)}`;
}

export default function DocumentingPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen  bg-white py-6 px-2 font-inter">
      <div className="flex items-center mb-6 mx-5">
        <button
          onClick={() => navigate("/")}
          className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiArrowLeft className="text-gray-600 text-xl" />
        </button>
        <h1 className="text-2xl font-bold text-left">{t("nav_documents")}</h1>
      </div>
      <div className="flex flex-col gap-4">
        {receipts.map((receipt, idx) => (
          <div
            key={idx}
            className="flex items-center bg-blue-100 rounded-2xl px-4 py-4 shadow-sm mb-2"
          >
            <div className="bg-white rounded-xl p-3 mr-4 flex items-center justify-center">
              <FiFileText className="text-blue-400 text-2xl" />
            </div>
            <div className="flex-1">
              <div className="text-lg font-semibold text-gray-800">
                {receipt.billNumber}
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {formatDateNepali(receipt.date)}
              </div>
            </div>
            <div className="text-right ml-4">
              <div className="text-base font-medium text-gray-700">
                {t("currency_symbol")}. {convertToNepaliDigits(receipt.amount.toFixed(2))}
              </div>
            </div>
            <div className="ml-2 text-gray-400">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
