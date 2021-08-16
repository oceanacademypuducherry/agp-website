import React from "react";
import SectionTitle from "../common/SectionTitle";
import Query from "./Query";
import "./querys.css";
import { author } from "../images/allImages";
import Carousel from "react-elastic-carousel";

export default function Querys() {
  const breakPoints = [
    { width: 1050, itemsToShow: 1 },
    { width: 1050, itemsToShow: 2 },
    { width: 1550, itemsToShow: 3 },
    // { width: 1500, itemsToShow: 5 },
    // { width: 1800, itemsToShow: 6 },
  ];

  return (
    <div id="query" className="querys-div">
      <SectionTitle title="Querys" />
      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      {/* <div className="all-querys"> */}
      <Carousel
        breakPoints={breakPoints}
        enableSwipe="true"
        enableAutoPlay="true"
        showArrows={false}
      >
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
      </Carousel>
      {/* </div> */}
    </div>
  );
}
