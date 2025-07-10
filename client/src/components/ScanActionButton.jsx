import React, { useState, useRef } from 'react';
import axios from 'axios';
import { MdDocumentScanner } from 'react-icons/md';
import UploadScanOptions from './UploadScanOptions';
import EditableForm from './EditableForm';
import LoadingIndicator from './LoadingIndicator';
import { useTranslation } from 'react-i18next';

const ScanActionButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const fileInputRef = useRef(null);
  const webcamRef = useRef(null);
  const token = localStorage.getItem('access_token');

  const triggerUpload = () => {
    setShowOptions(false);
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);

    const formData = new FormData();
    formData.append('image', file);

    setLoading(true);
    setData(null);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      // setData(res.data.data);
      setData({
      ...res.data.data,
      image_path: res.data.image_path
    });
      alert('Image processed!');
    } catch (err) {
      console.error(err);
      alert('Failed to process image.');
    } finally {
      setLoading(false);
    }
  };

  const handleScanClick = () => {
    setShowOptions(false);
    alert(t('scan_receipt'));
  };

  const handleConfirm = async () => {
    try {
      await axios.post('http://localhost:5000/api/save-receipt', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      alert('Receipt saved!');
      setImage(null);
      setData(null);
      setShowForm(false);
    } catch (err) {
      console.error(err);
      alert('Save failed.');
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <button
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 p-4 rounded-full text-white shadow-lg z-10"
        onClick={() => setShowOptions(!showOptions)}
      >
        <MdDocumentScanner className="text-2xl" />
      </button>

      {showOptions && (
        <UploadScanOptions
          triggerUpload={triggerUpload}
          handleScanClick={handleScanClick}
        />
      )}

      {showProcessing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-lg px-8 py-6 text-xl font-semibold shadow-lg">Processing...</div>
        </div>
      )}

      {showForm && (
        <EditableForm
          data={data || { merchantName: '', address: '', billDate: '', billNumber: '', totalAmount: '', items: [] }}
          setData={setData}
          handleConfirm={handleConfirm}
          handleClose={() => {
            setData(null);
            setShowForm(false);
          }}
        />
      )}

      {showCamera && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 w-full h-full">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="object-cover w-full h-full"
            videoConstraints={{ facingMode: 'environment' }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
          />
          <div className="absolute bottom-8 left-0 w-full flex justify-center gap-12 px-8">
            <button
              onClick={() => setShowCamera(false)}
              className="bg-gray-700 bg-opacity-80 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
              aria-label="Close Camera"
            >
              <FiX size={32} />
            </button>
            <button
              onClick={handleCapture}
              className="bg-green-600 bg-opacity-90 text-white p-6 rounded-full shadow-lg flex items-center justify-center"
              aria-label="Capture Photo"
            >
              <FiCamera size={40} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanActionButton;






