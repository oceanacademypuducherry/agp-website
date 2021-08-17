import React from "react";

export default function Video({ videoThumbnail, title }) {
  return (
    <div className="video-container">
      <div className="thumbnail">
        <img src={videoThumbnail} alt="" />
        <div className="thum-overlay"></div>
      </div>
      <div className="video-title">{title}</div>
    </div>
  );
}
