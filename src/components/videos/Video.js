import React from "react";
import { Link } from "react-router-dom";

export default function Video({ videoThumbnail, title, id }) {
  return (
    <Link to={`/agp-website/video-player/${id}`} className="video-link">
      <div className="video-container">
        <div className="thumbnail">
          <img src={videoThumbnail} alt="" />
          <div className="thum-overlay"></div>
        </div>
        <div className="video-title">
          {title.length > 70 ? `${title.slice(0, 70)}...` : title}
        </div>
      </div>
    </Link>
  );
}
