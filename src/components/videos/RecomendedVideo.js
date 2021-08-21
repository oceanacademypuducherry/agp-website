import React from "react";
import { Link } from "react-router-dom";

export default function RecomendedVideo({ imageLink, title, id }) {
  return (
    <Link to={`/agp-website/video-player/${id}`} className="video-link">
      <div className="vp-video-list">
        <div className="vp-vl-video">
          <img src={imageLink} alt="test" className="vp-vl-video-img" />
        </div>

        <div className="vp-vl-video-title">{title}</div>
      </div>
    </Link>
  );
}
