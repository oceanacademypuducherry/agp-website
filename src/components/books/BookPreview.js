import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { book } from "../images/allImages";

export default function BookPreview() {
  const selectedBook = useSelector((state) => state.allBooks);
  let { id } = useParams();
  useEffect(() => {
    console.log(selectedBook.books[0].bookName);
  }, []);
  return (
    <div className="book-preview">
      <div className="book-image">
        <img src={book} alt="" />
      </div>
    </div>
  );
}
