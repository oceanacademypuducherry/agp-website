import React, { useEffect, useState } from "react";
import Book from "./Book";
import "./books.css";
import SectionTitle from "../common/SectionTitle";
import Carousel from "react-elastic-carousel";
import { useSelector, useDispatch } from "react-redux";
import { bookDataRequest } from "../../redux/action";
import { bookImg } from "../images/allImages";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

export default function Books() {
  // const dispatch = useDispatch();
  // const allBooks = useSelector((state) => state.allBooks);
  // const { loading, error, books } = allBooks;
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

  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
    { width: 1800, itemsToShow: 6 },
  ];
  console.log(books);
  return (
    <div id="books" className="books-div">
      <SectionTitle title="Free Books" />

      <div className="see-all">
        <Link to={`/books/seeAll`} className="see-all-text ">
          See All
        </Link>
      </div>
      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        enableAutoPlay={false}
        showArrows={false}
      >
        {books.map((book, key) => (
          <Book
            key={key}
            img={book.bookLink}
            title={book.bookName}
            docId={book.docId}
          />
        ))}
        {/* <Book img={bookImg} title={"book.bookName"} />
        <Book img={bookImg} title={"book.bookName"} />
        <Book img={bookImg} title={"book.bookName"} />
        <Book img={bookImg} title={"book.bookName"} /> */}
      </Carousel>
      {/* </div> */}
    </div>
  );
}
