import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 

import Navbar from '../components/Navbar';
import SpendingCard from '../components/SpendingCard';
import TimeFilterTabs from '../components/TimeFilterTabs';
import BottomNavBar from '../components/BottomNavbar';
// import SpendingTrendChart from '../components/SpendingTrendChart';
// import BudgetBreakdown from '../components/BudgetBreakdown';
// import BudgetOverviewBanner from '../components/BudgetOverviewBanner';
import Banners from '../components/Banners';
import Circles from '../components/Circles';
import Graph from '../components/Graph';
import SavingsBanner from '../components/Savings';

export default function Homepage() {
  const [selectedMonth, setSelectedMonth] = useState("July");
  const { t } = useTranslation(); // ← ADD THIS

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SpendingCard />
        <div className="mx-[9px] mt-[20px]">
        <Banners/>
        </div>
        {/* <BudgetOverviewBanner /> */}
        {/* <SpendingTrendChart /> */}
        <Graph/>
        <div className="mx-[9px] mt-[20px]">
          <SavingsBanner/>
        </div>

        
        {/* 🔁 Translated heading */}
        <h2 className="font-medium text-3xl mt-[20px] mx-[20px]">
          {t("budget_breakdown")}
        </h2>

        <TimeFilterTabs
          selectedMonth={selectedMonth}
          onSelectMonth={setSelectedMonth}
        />
        <Circles/>
        {/* <BudgetBreakdown selectedMonth={selectedMonth} /> */}
        
      </main>
      <BottomNavBar />
    </div>
  );
}
