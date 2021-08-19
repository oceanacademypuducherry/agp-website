import React from "react";
import { Link } from "react-router-dom";

export default function Article({ articleImg, id }) {
  return (
    <Link to={`/article-view/YdQTNcEjjg4rn97T9iCd`}>
      <div className="article-container">
        <div className="article-img">
          <img src={articleImg} alt="" />
        </div>
        <div className="article-title">Article title</div>
        <div className="article-subtitle">
          The slice() method extracts parts of a string and returns the
          extracted parts in a new string. Use the start and end parameters to
          specify the part of the string you want to extract. The first
          character has the position 0, the second has position 1, and so on.
        </div>
        <div className="btn btn-fluid btn-success mt-3">Read more</div>
      </div>
    </Link>
  );
}
