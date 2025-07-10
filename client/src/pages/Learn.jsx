import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topArticles = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'ऋण लिने प्रक्रिया र आवश्यक कागजात',
    desc: 'नेपालमा बैंकबाट ऋण कसरी लिने? जान्नुहोस् प्रक्रिया।',
    link: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'आईपीओ आवेदन कसरी भर्ने?',
    desc: 'IPO भर्नका लागि आवश्यक चरणहरू र टिप्स।',
    link: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'मोबाइल बैंकिङ के हो?',
    desc: 'मोबाइल बैंकिङका फाइदा र प्रयोग विधि।',
    link: '#',
  },
];

const nepaliArticles = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'ऋण लिने प्रक्रिया र आवश्यक कागजात',
    date: '२० असार २०८१',
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'आईपीओ आवेदन कसरी भर्ने?',
    date: '१९ असार २०८१',
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'मोबाइल बैंकिङ के हो?',
    date: '१८ असार २०८१',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'बैंक खाता खोल्ने प्रक्रिया',
    date: '१७ असार २०८१',
  },
  {
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    title: 'बीमा किन आवश्यक छ?',
    date: '१६ असार २०८१',
  },
];

const tabs = [
  'Recent',
  'Popular',
  'Trending',
  'Market Report',
];

export default function Learn() {
  const [selectedTab, setSelectedTab] = useState('Popular');
  const navigate = useNavigate();

  return (
    <div className="font-inter bg-white min-h-screen px-3 pt-5 pb-10 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 relative">
        <button className="p-2 rounded-full hover:bg-gray-100 z-10" onClick={() => navigate('/')}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold tracking-wide">आर्थिक ज्ञान</h1>
        <div className="w-10" /> {/* Placeholder for symmetry, or you can add a search icon here if needed */}
      </div>
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2 mb-4">
        {/* Removed left-side search icon */}
        <input
          className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500"
          placeholder="आर्थिक ज्ञान"
          disabled
        />
        {/* Add right-side search icon */}
        <svg width="20" height="20" fill="none" stroke="#888" strokeWidth="2" className="ml-2"><circle cx="9" cy="9" r="7"/><line x1="17" y1="17" x2="13.65" y2="13.65"/></svg>
      </div>
      {/* Horizontal Scrollable Cards */}
      <div className="flex space-x-4 overflow-x-auto pb-2 mb-4 w-full">
        {topArticles.map((art, idx) => (
          <div
            key={idx}
            className="min-w-[260px] h-[220px] rounded-xl overflow-hidden relative shadow-md flex-shrink-0 w-full"
            style={{ backgroundImage: `url(${art.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Dark overlay for video effect */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)"/>
                <polygon points="20,16 34,24 20,32" fill="#fff"/>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 z-30">
              <div className="text-white font-semibold text-base mb-1">{art.title}</div>
              <div className="text-gray-200 text-xs mb-1">{art.desc}</div>
              <a href={art.link} className="text-blue-200 text-xs underline">थप पढ्नुहोस्...</a>
            </div>
          </div>
        ))}
      </div>
      {/* Tabs */}
      <div className="flex space-x-6 mb-4 px-1">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`text-base font-medium pb-1 ${selectedTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-400'}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab === 'Recent' ? 'हालैका' : tab === 'Popular' ? 'लोकप्रिय' : tab === 'Trending' ? 'प्रवृत्तिमा' : tab === 'Market Report' ? 'बजार प्रतिवेदन' : tab}
          </button>
        ))}
      </div>
      {/* Article List */}
      <div className="space-y-3">
        {nepaliArticles.map((art, idx) => (
          <div key={idx} className="flex items-center bg-white rounded-xl shadow p-3 w-full">
            <div className="relative w-16 h-16 mr-3 flex-shrink-0">
              <img src={art.img} alt="thumb" className="w-16 h-16 rounded-lg object-cover" />
              {/* Dark overlay for video effect */}
              <div className="absolute inset-0 bg-black/30 rounded-lg" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)"/>
                  <polygon points="20,16 34,24 20,32" fill="#fff"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 text-base mb-1">{art.title}</div>
              <div className="text-gray-400 text-xs">{art.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
