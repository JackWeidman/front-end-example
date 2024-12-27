import React from "react";

export default function Paginator({
  totalResults,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-300"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-arrow-left">Previous</i>
      </button>

      <span className="text-lg flex items-center">
        <span className="mr-2">Page:</span>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={currentPage}
          onChange={(e) => handlePageChange(Number(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </span>

      <span>/ {totalPages}</span>

      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-300"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="fa-solid fa-arrow-right">Next</i>
      </button>
    </div>
  );
}
