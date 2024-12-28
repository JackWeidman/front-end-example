import React from "react";

const BookRow = ({ book }) => {
  const formattedTitle = book.title.replace(/\(.*$/, "");
  const readingStatus = parseInt(book.myRating) > 0 ? "Read" : "Want to Read";

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-2 whitespace-pre-line text-gray-700">
        {formattedTitle}
      </td>
      <td className="px-4 py-2 text-gray-700">{book.author}</td>
      <td className="px-4 py-2 text-center text-gray-700">
        {readingStatus} {/* Display reading status */}
      </td>
      <td className=" text-center px-4 py-2 text-yellow-500">
        {"★".repeat(book.myRating)} {/* Display stars based on rating */}
      </td>
    </tr>
  );
};

export default BookRow;
