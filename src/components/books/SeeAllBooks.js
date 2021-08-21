import React, { useEffect, useState } from "react";
import "./books.css";
import firebase from "../../firebase";
import Book from "./Book";

export default function SeeAllBooks() {
  const [books, setBooks] = useState([]);
  const firestore = firebase.firestore();
  const bookFromDb = firestore
    .collection("books")
    .where("type", "==", "free")
    .get();

  function getBookData() {
    let bk = [];
    bookFromDb.then((response) => {
      response.docs.forEach((book) => {
        let dbField = book.data();
        dbField["docId"] = book.id;
        bk.push(dbField);
      });
      setBooks(bk);
    });
  }

  useEffect(() => {
    getBookData();
  }, []);
  return (
    <div className="see-all-book">
      <div className="sab-wrap">
        {books.map((book, key) => (
          <Book
            key={key}
            img={book.bookLink}
            title={book.bookName}
            docId={book.docId}
          />
        ))}
      </div>
    </div>
  );
}
