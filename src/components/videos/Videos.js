import React, { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Video from "./Video";
import "./videos.css";
import { video } from "../images/allImages";
import Carousel from "react-elastic-carousel";
import firebase from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { videoDataRequest } from "../../redux/action";
import { Link } from "react-router-dom";

export default function Videos() {
  // const dispatch = useDispatch();
  // const allVideos = useSelector((state) => state.allVideos);
  // const { loading, videos, error } = allVideos;
  const [videos, setVideos] = useState([]);
  const firestore = firebase.firestore();
  function getVideoData() {
    let vd = [];
    firestore
      .collection("youtubeVedios")
      .get()
      .then((videoData) => {
        videoData.docs.forEach((video) => {
          let dbField = video.data();
          dbField["docId"] = video.id;
          vd.push(dbField);
        });
        setVideos(vd);
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    getVideoData();
  }, []);

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
        <Link to={`/agp-website/videos/seeAll`} className="see-all-text ">
          See All
        </Link>
      </div>
      {/* <div className="all-videos"> */}

      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        enableAutoPlay={false}
        showArrows={false}
      >
        {videos.map((video, key) => (
          <Video
            key={key}
            videoThumbnail={video.videoImage}
            title={video.title}
            id={video.docId}
          />
        ))}
      </Carousel>
      {/* </div> */}
    </div>
  );
}
