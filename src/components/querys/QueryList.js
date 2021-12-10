import React from "react";
import { Link } from "react-router-dom";

export default function QueryList({ queryId, title, image, postId }) {
  return (
    <Link
      to={`/agp-website/query/read-query/${queryId}/${postId}`}
      className="to-link"
    >
      <div className="querys">
        <div className="rq-q-image">
          <img className="img" src={image} height="100%" width="100%" />
        </div>
        <div className="rq-q-title">{title}...</div>
      </div>
    </Link>
  );
}
