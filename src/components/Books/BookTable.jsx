import React, { useState, useEffect } from "react";
import useBookList from "../../hooks/books";
import BookRow from "./BookRow";
import Paginator from "../Paginator"; // Importing the Paginator component
import Loading from "../Loading";
import BookFilter from "./BookFilter";

const BookList = () => {
  const { books, loading, setFilter } = useBookList();
  const itemsPerPage = 20; // Number of books to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]); // Whenever the books data changes, reset the filtered books

  if (loading) {
    return <Loading />;
  }

  // Apply the filter and reset to page 1 if the filter changes
  const handleFilterChange = (filters) => {
    setFilter(filters);
    setCurrentPage(1); // Reset to page 1 on filter change
    const filtered = books.filter((book) => {
      const { searchTerm, readingStatus, rating } = filters;
      let matches = true;

      if (searchTerm) {
        matches = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      }

      if (readingStatus && book.readingStatus !== readingStatus) {
        matches = false;
      }

      if (rating && book.rating !== rating) {
        matches = false;
      }

      return matches;
    });

    setFilteredBooks(filtered); // Set the filtered books based on the criteria
  };

  // Calculate total results (number of books)
  const totalResults = filteredBooks.length;

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get the books to be displayed on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  return (
    <div className="max-w-screen-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <h2 className="text-4xl text-left font-semibold text-gray-800 mb-4">
          Jack's Book List
        </h2>
        <BookFilter onChange={handleFilterChange} />
      </div>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Book Title
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
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
