import React, { useState } from "react";

const BookFilter = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [readingStatus, setReadingStatus] = useState("");
  const [rating, setRating] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onChange({ searchTerm: e.target.value, readingStatus, rating });
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setReadingStatus(newStatus);

    // Reset the rating to "All Ratings" if "Want to Read" is selected
    if (newStatus === "want-to-read") {
      setRating("");
      // Make sure the parent component also gets the updated state with no rating filter
      onChange({ searchTerm, readingStatus: newStatus, rating: "" });
    } else {
      onChange({ searchTerm, readingStatus: newStatus, rating });
    }
  };

  const handleRatingChange = (e) => {
    const newRating = e.target.value;
    setRating(newRating);
    onChange({ searchTerm, readingStatus, rating: newRating });
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <input
        type="text"
        placeholder="Search Books"
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 rounded w-full md:w-auto"
      />
      <select
        value={readingStatus}
        onChange={handleStatusChange}
        className="border p-2 rounded w-full md:w-auto"
      >
        <option value="">All</option>
        <option value="read">Read</option>
        <option value="want-to-read">Want to Read</option>
      </select>
      <select
        value={rating}
        onChange={handleRatingChange}
        className="border p-2 rounded w-full md:w-auto"
        disabled={readingStatus === "want-to-read"} // Disable if "Want to Read" is selected
      >
        <option value="">All Ratings</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  );
};

export default BookFilter;
