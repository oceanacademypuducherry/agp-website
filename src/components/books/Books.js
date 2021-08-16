import React, { useEffect } from "react";
import Book from "./Book";
import "./books.css";
import SectionTitle from "../common/SectionTitle";
import { book } from "../images/allImages";
import Carousel from "react-elastic-carousel";
// import "./dragScroll";

export default function Books() {
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
      {/* <div className="all-books"> */}
      <Carousel
        breakPoints={breakPoints}
        enableSwipe="true"
        enableAutoPlay="true"
        showArrows={false}
      >
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
        <Book img={book} />
      </Carousel>
      {/* </div> */}
    </div>
  );
}
