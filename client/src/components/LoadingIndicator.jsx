// import React from 'react';

// function LoadingIndicator() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto mb-4"></div>
//         <p className="text-sm text-gray-700">Processing receipt... please wait</p>
//       </div>
//     </div>
//   );
// }

// export default LoadingIndicator;

import React from 'react';
import { useTranslation } from 'react-i18next';

function LoadingIndicator() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto mb-4"></div>
        <p className="text-sm text-gray-700">{t('loading_receipt')}</p>
      </div>
    </div>
  );
}

export default LoadingIndicator;
