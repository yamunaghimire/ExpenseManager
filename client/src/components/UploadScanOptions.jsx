import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const UploadScanOptions = ({ triggerUpload, handleScanClick }) => {
  const { t } = useTranslation();
  return (
    <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2 w-52 bg-white rounded-xl shadow-xl p-1 z-20">
      <button
        onClick={triggerUpload}
        className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-50 transition"
      >
        <FaCloudUploadAlt className="text-purple-500 text-lg" />
        <span className="text-sm font-medium text-gray-700">{t('upload_receipt')}</span>
      </button>
      <button
        onClick={handleScanClick}
        className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-50 transition"
      >
        <FiCamera className="text-purple-500 text-lg" />
        <span className="text-sm font-medium text-gray-700">{t('scan_receipt')}</span>
      </button>
    </div>
  );
};

export default UploadScanOptions;
