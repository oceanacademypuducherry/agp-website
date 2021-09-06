import React from "react";
import { Link } from "react-router-dom";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export default function Video({ videoThumbnail, title, id }) {
  return (
    <Link to={`/agp-website/video-player/${id}`} className="video-link">
      <div className="video-container">
        <div className="thumbnail">
          <div className="thum-overlay">
            <PlayArrowIcon
              style={{
                fontSize: 100,
                color: "rgba(0, 0, 0, 0.76)",
              }}
            />
          </div>
          <img src={videoThumbnail} alt="" />
        </div>
        <div className="video-title">
          {title.length > 70 ? `${title.slice(0, 70)}...` : title}
        </div>
      </div>
    </Link>
  );
}
