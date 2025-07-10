import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuSettings } from "react-icons/lu";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setShowDropdown(false);
  };

  return (
    <div className="bg-[#f5f2ff] px-4 py-3 rounded-xl">
      <div
        className="flex i justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex ">
          <div className="text-teal-500 text-xl mr-4">
            <LuSettings />
          </div>
          <span className="text-sm font-medium">{t("change_language")}</span>
        </div>
        <div className="text-gray-500 text-sm">
          {i18n.language === 'en' ? 'English' : 'नेपाली'}
        </div>
      </div>

      {showDropdown && (
        <select
          onChange={handleLanguageChange}
          value={i18n.language}
          className="mt-3 text-sm border border-gray-300 rounded px-2 py-1 w-full bg-white"
        >
          <option value="en">English</option>
          <option value="ne">नेपाली</option>
        </select>
      )}
    </div>
  );
};

export default LanguageSelector;
