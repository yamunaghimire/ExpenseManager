import React from "react";
import { useNavigate } from "react-router-dom";

const deals = [
  { name: "दूध", store: "बिगमार्ट", original: "रु ४५०", price: "रु ३८०" },
  { name: "पाउरोटी", store: "केके मार्ट", original: "रु २८०", price: "रु २२०" },
  { name: "अण्डा", store: "बिगमार्ट", original: "रु ५००", price: "रु ४२०" },
  { name: "कफी", store: "भाटभटेनी", original: "रु १०५०", price: "रु ९००" },
  { name: "चिनी", store: "सुपरमार्केट", original: "रु १५०", price: "रु १२०" },
  { name: "चामल", store: "भाटभटेनी", original: "रु १,८००", price: "रु १,६५०" },

  
  
];

const recommended = [
  {
    item: "एप्पल आइफोन १५",
    original: "रु ९९,९९९",
    efficient: "रु ८९,९९९",
    status: "up",
  },
  {
    item: "सामसुङ ग्यालेक्सी S२३",
    original: "रु ७९,९९९",
    efficient: "रु ७४,९९९",
    status: "up",
  },
  {
    item: "म्याकबुक एयर M२",
    original: "रु १,१९,९९९",
    efficient: "रु १,०९,९९९",
    status: "up",
  },
  {
    item: "डेल XPS १५",
    original: "रु १,४९,९९९",
    efficient: "रु १,३९,९९९",
    status: "up",
  },
];

export default function TrendingPage() {
  const navigate = useNavigate();
  return (
    <div className="font-inter bg-white h-screen px-3 pt-5 pb-10 relative">
      {/* Back Arrow */}
      <div className="absolute top-4 left-4 cursor-pointer" onClick={() => navigate("/")}> 
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h1 className="text-3xl font-bold mt-12 mb-5 text-left mx-[20px]">तपाईंको लागि विशेष अफरहरू</h1>
      <div className="grid grid-cols-2 gap-4 mb-9  mx-[20px]">
        {deals.map((deal, idx) => (
          <div className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col justify-between min-w-0" key={idx}>
            <div className="flex justify-between items-start">
              <span className="text-lg font-semibold">{deal.name}</span>
              <span className="text-base text-red-600 line-through font-medium">{deal.original}</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <span className="text-gray-500 text-base">{deal.store}</span>
              <span className="text-green-600 text-lg font-bold">{deal.price}</span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-4 mt-12 text-left mx-[20px]">तपाईंको लागि सिफारिसहरू</h2>
      <div className="bg-white rounded-xl shadow-sm p-4 overflow-x-auto mx-[20px]">
        <table className="w-full border-collapse text-base">
          <thead>
            <tr>
              <th className="py-2 px-2 text-left font-bold">वस्तु</th>
              <th className="py-2 px-2 text-left font-bold">मूल्य (पहिले)</th>
              <th className="py-2 px-2 text-left font-bold">किफायती मूल्य</th>
              <th className="py-2 px-2 text-left font-bold">स्थिति</th>
            </tr>
          </thead>
          <tbody>
            {recommended.map((rec, idx) => (
              <tr key={idx}>
                <td className="py-2 px-2">{rec.item}</td>
                <td className="py-2 px-2 text-red-600 font-medium">{rec.original}</td>
                <td className="py-2 px-2 text-green-600 font-bold">{rec.efficient}</td>
                <td className="py-2 px-2 text-center">
                  {rec.status === "up" && (
                    <span className="text-green-600 text-xl">↑</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
