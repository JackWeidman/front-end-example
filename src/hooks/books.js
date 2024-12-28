import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig.js";

const useBookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    searchTerm: "",
    readingStatus: "",
    rating: "",
  });

  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollection = collection(db, "books");
      const booksSnapshot = await getDocs(booksCollection);
      const booksList = booksSnapshot.docs.map((doc) => doc.data());

      // Sort books by author's last name
      const sortedBooks = booksList.sort((a, b) => {
        const getLastName = (author) => {
          const authorNameParts = author.split(" ");
          const lastName = authorNameParts
            .filter((part) => part.length > 1)
            .pop()
            .toLowerCase();
          return lastName;
        };

        const lastNameA = getLastName(a.author);
        const lastNameB = getLastName(b.author);

        return lastNameA.localeCompare(lastNameB);
      });

      setBooks(sortedBooks);
      setFilteredBooks(sortedBooks);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let updatedBooks = [...books]; // Create a copy to avoid direct mutation

      if (filters.searchTerm) {
        updatedBooks = updatedBooks.filter((book) => {
          const titleMatch = book.title
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase());
          const authorMatch = book.author
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase());

          return titleMatch || authorMatch;
        });
      }

      if (filters.readingStatus) {
        updatedBooks = updatedBooks.filter((book) => {
          const computedStatus =
            parseInt(book.myRating || "0", 10) > 0 ? "read" : "want-to-read";
          return (
            computedStatus.toLowerCase() === filters.readingStatus.toLowerCase()
          );
        });
      }

      if (filters.rating) {
        updatedBooks = updatedBooks.filter((book) => {
          const myRating = String(book.myRating || "0");
          return filters.rating === "" || myRating === filters.rating;
        });
      }

      setFilteredBooks(updatedBooks);
    };

    applyFilters();
  }, [filters, books]);

  const setFilter = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return { books: filteredBooks, loading, setFilter };
};

export default useBookList;
