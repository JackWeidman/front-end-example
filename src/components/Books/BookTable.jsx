import React, { useState } from "react";
import useBookList from "../../hooks/books";
import BookRow from "./BookRow";
import Paginator from "../Paginator"; // Importing the Paginator component

const BookList = () => {
  const { books, loading } = useBookList();
  const itemsPerPage = 20; // Number of books to display per page
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Calculate total results (number of books)
  const totalResults = books.length;

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get the books to be displayed on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = books.slice(startIndex, endIndex);

  return (
    <div className="max-w-screen-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-4xl text-center font-semibold text-gray-800 mb-4">
        Jack's Book List
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-center text-gray-700 font-semibold">
                Book Title
              </th>
              <th className="px-4 py-2 text-center text-gray-700 font-semibold">
                Author
              </th>
              <th className="px-4 py-2 text-center text-gray-700 font-semibold">
                Reading Status
              </th>
              <th className="px-4 py-2 text-center text-gray-700 font-semibold">
                My Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedBooks.map((book) => (
              <BookRow key={book.bookId} book={book} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Paginator
          totalResults={totalResults}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          pageSize={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default BookList;
