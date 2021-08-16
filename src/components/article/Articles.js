import React from "react";
import SectionTitle from "../common/SectionTitle";
import Article from "./Article";
import "./article.css";
import { article } from "../images/allImages";
import Carousel from "react-elastic-carousel";

export default function Articles() {
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
    { width: 1800, itemsToShow: 6 },
  ];

  return (
    <div id="article" className="article-div">
      <SectionTitle title="Articles" />
      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      {/* <div className="all-articles"> */}
      <Carousel
        breakPoints={breakPoints}
        enableSwipe="true"
        enableAutoPlay="true"
        showArrows={false}
      >
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
      </Carousel>
      {/* </div> */}
    </div>
  );
}
