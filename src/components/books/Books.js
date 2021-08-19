import React, { useEffect } from "react";
import Book from "./Book";
import "./books.css";
import SectionTitle from "../common/SectionTitle";
import Carousel from "react-elastic-carousel";
import { useSelector, useDispatch } from "react-redux";
import { bookDataRequest } from "../../redux/action";
import { book } from "../images/allImages";

export default function Books() {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.allBooks);

  const { loading, error, books } = allBooks;

  useEffect(() => {
    dispatch(bookDataRequest());
  }, [dispatch]);

  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
    { width: 1800, itemsToShow: 6 },
  ];

  return (
    <div id="books" className="books-div">
      <SectionTitle title="Free Books" />

      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        enableAutoPlay={false}
        showArrows={false}
      >
        {loading ? (
          <h1>Book loading</h1>
        ) : error ? (
          <h1>Book error</h1>
        ) : (
          books.map((book, index) => (
            <Book img={book.bookLink} title={book.bookName} id={index} />
          ))
        )}

        <Book img={book} title={"book.bookName"} />
        <Book img={book} title={"book.bookName"} />
        <Book img={book} title={"book.bookName"} />
        <Book img={book} title={"book.bookName"} />
      </Carousel>
      {/* </div> */}
    </div>
  );
}
