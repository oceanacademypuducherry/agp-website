import React from "react";
import SectionTitle from "../common/SectionTitle";
import Video from "./Video";
import "./videos.css";
import { video } from "../images/allImages";

export default function Videos() {
  return (
    <div id="videos" className="videos-div">
      <SectionTitle title="Free Videos" />
      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      <div className="all-videos">
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
        <Video videoThumbnail={video} />
      </div>
    </div>
  );
}
