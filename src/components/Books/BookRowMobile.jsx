import React from "react";

const BookRowDesktop = ({ book }) => {
  const formattedTitle = book.title.replace(/\(.*$/, "");
  const readingStatus = parseInt(book.myRating) > 0 ? "Read" : "Want to Read";

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="border-r border-gray-200 px-4 py-2 text-gray-700">
        {formattedTitle}
      </td>
      <td className="border-r border-gray-200 px-4 py-2 text-gray-700">
        {book.author}
      </td>
      <td className="border-r text-center border-gray-200 px-4 py-2 text-yellow-500">
        {"★".repeat(book.myRating)}
      </td>
      <td className="px-4 py-2 text-center text-gray-700">{readingStatus}</td>
    </tr>
  );
};

export default BookRowDesktop;
