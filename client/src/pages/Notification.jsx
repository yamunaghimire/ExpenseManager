import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const notifications = [
  {
    date: 'आज, जेठ ८',
    items: [
      {
        time: '८:३० बिहान',
        text: 'Bigmart मा आजको विशेष छुट! तपाईंको खर्चमा १०% बचत गर्नुहोस्।',
      },
      {
        time: '६:०० बिहान',
        text: 'नयाँ अफर: Bigmart मा रु ५०० भन्दा बढीको किनमेलमा निःशुल्क डेलिभरी।',
      },
    ],
  },
  {
    date: 'हिजो, जेठ ७',
    items: [
      {
        time: '११:१५ बिहान',
        text: 'तपाईंको मासिक खर्च सीमा नजिक छ। कृपया ध्यान दिनुहोस्।',
      },
    ],
  },
  {
    date: 'जेठ ६',
    items: [
      {
        time: '९:०० राति',
        text: 'तपाईंको बिल भुक्तानी गर्न बाँकी छ। समयमै तिर्नुहोस्।',
      },
      {
        time: '७:१५ बेलुका',
        text: 'Bigmart: आजको किनमेलमा रु १०० क्यासब्याक पाउनुहोस्।',
      },
      {
        time: '१२:१७ दिउँसो',
        text: 'खर्च ट्र्याक गर्न नबिर्सनुहोस्! तपाईंको खर्च विवरण हेर्नुहोस्।',
      },
    ],
  },
  {
    date: 'जेठ ५',
    items: [
      {
        time: '५:३० बिहान',
        text: 'नयाँ कार्ड सफलतापूर्वक थपियो।',
      },
      {
        time: '२:०० दिउँसो',
        text: 'तपाईंको खर्च रिपोर्ट तयार छ। हेर्नुहोस्।',
      },
    ],
  },
  {
    date: 'जेठ ४',
    items: [
      {
        time: '१०:०० बिहान',
        text: 'Bigmart: आजको किनमेलमा ५% छुट!',
      },
      {
        time: '८:४५ बिहान',
        text: 'तपाईंको प्रोफाइल सफलतापूर्वक अपडेट भयो।',
      },
    ],
  },
  {
    date: 'जेठ ३',
    items: [
      {
        time: '७:३० बेलुका',
        text: 'नयाँ अफर: Bigmart मा रु १००० भन्दा बढीको किनमेलमा विशेष उपहार।',
      },
    ],
  },
];

export default function Notification() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Header */}
      <div className="flex items-center px-4 pt-6 pb-3 bg-white shadow-sm sticky top-0 z-10">
        <FiChevronLeft className="text-2xl mr-2 cursor-pointer" onClick={() => navigate('/')} />
        <h1 className="text-xl font-bold text-center">सूचनाहरू</h1>
      </div>

      {/* Notifications List */}
      <div className="px-3 mt-2">
        {notifications.map((section, idx) => (
          <div key={idx} className="mb-6">
            <div className="text-xs text-gray-500 font-semibold mb-2 ml-1">{section.date}</div>
            {section.items.map((item, j) => (
              <div
                key={j}
                className="bg-white rounded-xl shadow-sm px-4 py-3 mb-2 flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-orange-500 text-lg font-bold">ब</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-800 mb-1">{item.text}</div>
                  <div className="text-xs text-gray-400">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
