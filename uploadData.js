import { collection, doc, setDoc } from "firebase/firestore";
import db from "./firebaseConfig.js"; // Path to your Firebase initialization file
import jsonData from "./Goodreads_data.json" assert { type: "json" }; // Path to your JSON file
import dotenv from "dotenv";
dotenv.config();

const uploadData = async () => {
  try {
    const collectionRef = collection(db, "books"); // Replace 'books' with your Firestore collection name

    for (const book of jsonData) {
      // Use 'Book Id' or another unique field as the document ID
      const docRef = doc(collectionRef, book["Book Id"]);
      await setDoc(docRef, {
        title: book["Title"],
        author: book["Author"],
        authorLF: book["Author l-f"],
        numberOfPages: book["Number of Pages"],
        publicationYear: book["Original Publication Year"],
        averageRating: book["Average Rating"],
        myRating: book["My Rating"],
        dateRead: book["Date Read"],
        review: book["My Review"],
        bookId: book["Book Id"],
      });
      console.log(`Uploaded book: ${book["Title"]}`);
    }
    console.log("All data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data: ", error);
  }
};

uploadData();
