import React, { useEffect } from "react";
import Book from "./Book";
import "./books.css";
import SectionTitle from "../common/SectionTitle";
import { book } from "../images/allImages";
// import "./dragScroll";

export default function Books() {
  return (
    <div id="books" className="books-div">
      <SectionTitle title="Free Books" />
      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      <div className="all-books">
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
      </div>
    </div>
  );
}
