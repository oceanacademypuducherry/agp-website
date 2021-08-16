import React from "react";
import SectionTitle from "../common/SectionTitle";
import Video from "./Video";
import "./videos.css";
import { video } from "../images/allImages";
import Carousel from "react-elastic-carousel";

export default function Videos() {
  const breakPoints = [
    { width: 650, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1800, itemsToShow: 4 },
    { width: 1800, itemsToShow: 4 },
  ];

  return (
    <div id="videos" className="videos-div">
      <SectionTitle title="Free Videos" />
      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      {/* <div className="all-videos"> */}
      <Carousel
        breakPoints={breakPoints}
        enableSwipe="true"
        enableAutoPlay="true"
        showArrows={false}
      >
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
      </Carousel>
      {/* </div> */}
    </div>
  );
}
