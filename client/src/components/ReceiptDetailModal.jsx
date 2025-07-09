import React from 'react';
import { useTranslation } from 'react-i18next';

const ReceiptDetailModal = ({ receipt, onClose }) => {
  const { t } = useTranslation();
  if (!receipt) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          aria-label="Close Modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">{receipt.merchant_name}</h2>

        {receipt.image_path && (
          <img
            src={`http://localhost:5000/${receipt.image_path}`}
            alt="Receipt"
            className="w-full rounded mb-4"
          />
        )}

        <p><strong>{t('address')}:</strong> {receipt.address}</p>
        <p><strong>{t('billNumber')}:</strong> {receipt.bill_number}</p>
        <p><strong>{t('billDate')}:</strong> {new Date(receipt.bill_date).toLocaleDateString()}</p>
        <p><strong>{t('totalAmount')}:</strong> NPR {receipt.total_amount}</p>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">{t('items')}:</h3>
          <ul className="list-disc list-inside max-h-48 overflow-y-auto">
            {receipt.items && receipt.items.length > 0 ? (
              receipt.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} - {item.quantity} × NPR {item.rate} = NPR {item.amount}
                </li>
              ))
            ) : (
              <li>{t('no_items_found')}</li>
            )}
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          {t('close')}
        </button>
      </div>
    </div>
  );
};

export default ReceiptDetailModal;
