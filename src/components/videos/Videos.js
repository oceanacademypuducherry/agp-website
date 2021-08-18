import React, { useEffect } from "react";
import SectionTitle from "../common/SectionTitle";
import Video from "./Video";
import "./videos.css";
import { video } from "../images/allImages";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { videoDataRequest } from "../../redux/action";

export default function Videos() {
  const dispatch = useDispatch();
  const allVideos = useSelector((state) => state.allVideos);
  const { loading, videos, error } = allVideos;

  useEffect(() => {
    dispatch(videoDataRequest());
  }, [dispatch]);

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
        enableSwipe={true}
        enableAutoPlay={false}
        showArrows={false}
      >
        {loading ? (
          <h1>video Loading</h1>
        ) : error ? (
          <h1>video Error</h1>
        ) : (
          videos.map((video, index) => (
            <Video
              videoThumbnail={video.imageLink}
              title={video.title}
              id={index}
            />
          ))
        )}
      </Carousel>
      {/* </div> */}
    </div>
  );
}
