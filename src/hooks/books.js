import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig.js";

const useBookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollection = collection(db, "books");
      const booksSnapshot = await getDocs(booksCollection);
      const booksList = booksSnapshot.docs.map((doc) => doc.data());

      // Sort the books by author's last name
      const sortedBooks = booksList.sort((a, b) => {
        const getLastName = (author) => {
          const authorNameParts = author.split(" ");
          // Remove initials or middle names and grab the last word (last name)
          const lastName = authorNameParts
            .filter((part) => part.length > 1)
            .pop()
            .toLowerCase();
          return lastName;
        };

        const lastNameA = getLastName(a.author);
        const lastNameB = getLastName(b.author);

        if (lastNameA < lastNameB) return -1;
        if (lastNameA > lastNameB) return 1;
        return 0;
      });
      console.log(sortedBooks, "sortedBooks");
      setBooks(sortedBooks);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  return { books, loading };
};

export default useBookList;
