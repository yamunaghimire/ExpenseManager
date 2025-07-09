import React, { useState } from 'react';
import axios from 'axios';
import { FiArrowLeft, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ManualEntryForm = () => {
  const navigate = useNavigate();
  const [billNo, setBillNo] = useState('');
  const [billDate, setBillDate] = useState('');
  const [store, setStore] = useState('');
  const [address, setAddress] = useState('');

  const [items, setItems] = useState([]);
  const [item, setItem] = useState({ name: '', qty: '', rate: '', amt: '' });
  const [editIndex, setEditIndex] = useState(null);
  const { t } = useTranslation();

  const [totalAmount, setTotalAmount] = useState(0);

  const calculateAmount = (qty, rate) => {
    const q = parseFloat(qty);
    const r = parseFloat(rate);
    return !isNaN(q) && !isNaN(r) ? q * r : 0;
  };

  const handleAddOrUpdateItem = () => {
    const amt = calculateAmount(item.qty, item.rate);
    const newItem = { ...item, amt };

    if (editIndex !== null) {
      // Update existing item
      const updatedItems = [...items];
      const prevAmt = updatedItems[editIndex].amt;
      updatedItems[editIndex] = newItem;
      setItems(updatedItems);
      setTotalAmount((prev) => prev - prevAmt + amt);
      setEditIndex(null);
    } else {
      // Add new item
      setItems((prev) => [...prev, newItem]);
      setTotalAmount((prev) => prev + amt);
    }

    setItem({ name: '', qty: '', rate: '', amt: '' });
  };

  const handleEdit = (index) => {
    setItem(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const amt = items[index].amt;
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setTotalAmount((prev) => prev - amt);
    if (editIndex === index) setEditIndex(null);
  };

  const handleSaveReceipt = async () => {
    const payload = {
      bill_no: billNo,
      bill_date: billDate,
      store,
      address,
      items,
      total: totalAmount,
    };

    try {
      const token = localStorage.getItem('access_token');
      await axios.post('http://localhost:5000/api/save-receipt', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(t('save_receipt')); // simple feedback
    } catch (error) {
      console.error('Failed to save receipt:', error);
      alert(t('network_error'));
    }
  };

  return (
    <div className="min-h-screen bg-teal-500">
      <div className="flex items-center px-5 pt-6 text-white font-semibold text-lg">
        <FiArrowLeft className="mr-4 text-xl" onClick={() => navigate('/')} />
        {t('manual_entry')}
      </div>

      <div className="bg-white rounded-t-3xl px-5 py-6 mt-6">
        {/* Bill Info */}
        <label className="text-sm text-gray-600">{t('bill_no')}:</label>
        <input
          type="text"
          value={billNo}
          onChange={(e) => setBillNo(e.target.value)}
          className="w-full bg-gray-100 rounded-lg px-4 py-2 mt-1 mb-4"
        />

        <label className="text-sm text-gray-600">{t('billDate')}</label>
        <div className="relative mb-4">
          <input
            type="date"
            value={billDate}
            onChange={(e) => setBillDate(e.target.value)}
            className="w-full bg-gray-100 rounded-lg px-4 py-2 pr-10"
          />
          
        </div>

        <label className="text-sm text-gray-600">{t('store')}</label>
        <select
          value={store}
          onChange={(e) => setStore(e.target.value)}
          className="w-full bg-gray-100 rounded-lg px-4 py-2 mt-1 mb-4"
        >
          <option value="">{t('select_store')}</option>
          <option value="Grocery">{t('grocery')}</option>
          <option value="Pharmacy">{t('pharmacy')}</option>
        </select>

        <label className="text-sm text-gray-600">{t('address')}</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full bg-gray-100 rounded-lg px-4 py-2 mt-1 mb-4"
        />

        {/* Item Fields */}
        <label className="text-sm text-gray-600">{t('item_name')}</label>
        <input
          type="text"
          placeholder={t('input_text')}
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          className="w-full bg-gray-100 rounded-lg px-4 py-2 mt-1 mb-2"
        />

        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder={t('qty')}
            value={item.qty}
            onChange={(e) => setItem({ ...item, qty: e.target.value })}
            className="w-1/2 bg-gray-100 rounded-lg px-3 py-2"
          />
          <input
            type="number"
            placeholder={t('rate')}
            value={item.rate}
            onChange={(e) => setItem({ ...item, rate: e.target.value })}
            className="w-1/2 bg-gray-100 rounded-lg px-3 py-2"
          />
        </div>

        <button
          onClick={handleAddOrUpdateItem}
          className="flex items-center text-teal-500 font-semibold text-sm mb-6"
        >
          {editIndex !== null ? t('update_item') : t('add_item')}
          <FiPlus className="ml-2" />
        </button>

        {/* Item List */}
        {items.length > 0 && (
          <div className="mb-6">
            <div className="font-medium text-sm mb-2">{t('added_items')}</div>
            <ul className="space-y-2 text-sm">
              {items.map((it, idx) => (
                <li key={idx} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md">
                  <span>
                    {it.name} – {t('qty')}: {it.qty}, {t('rate')}: {it.rate}, {t('amount')}: {it.amt.toFixed(2)}
                  </span>
                  <div className="flex gap-2 text-teal-500 text-lg">
                    <button onClick={() => handleEdit(idx)}><FiEdit2 /></button>
                    <button onClick={() => handleDelete(idx)}><FiTrash2 /></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Total */}
        <label className="text-sm text-gray-600">{t('totalAmount')}</label>
        <input
          type="number"
          readOnly
          value={totalAmount.toFixed(2)}
          className="w-full bg-gray-100 rounded-lg px-4 py-2 mt-1 mb-6"
        />

        {/* Save Receipt */}
        <button
          onClick={handleSaveReceipt}
          className="w-full bg-gray-100 text-black font-medium py-3 rounded-lg"
        >
          {t('save_receipt')}
        </button>
      </div>
    </div>
  );
};

export default ManualEntryForm;
