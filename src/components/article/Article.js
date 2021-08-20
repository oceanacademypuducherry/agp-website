import React from "react";
import { Link } from "react-router-dom";

export default function Article({ articleImg, docId, title, description }) {
  return (
    <Link to={`/article-view/${docId}`} className="to-link">
      <div className="article-container">
        <div className="article-img">
          <img src={articleImg} alt="" />
        </div>
        <div className="article-title">{title}</div>
        <div className="article-subtitle">{description}</div>
        <div className="btn btn-fluid btn-success mt-3">Read more</div>
      </div>
    </Link>
  );
}
