import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 max-w-lg mx-auto">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-h-full overflow-y-auto w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-4 text-black text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
