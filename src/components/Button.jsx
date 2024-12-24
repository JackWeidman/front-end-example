import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
