import React from "react";
import { Link } from "react-router-dom";

export default function Book({ img, title, docId }) {
  return (
    <Link to={`/agp-website/book-preview/${docId}`} className="book-link">
      <div className="book-container">
        <div className="book">
          <img src={img} />
        </div>
        <div className="book-title">{title}</div>
        {/* <div className="book-preview-button btn-fluid btn-success">Preview</div> */}
      </div>
    </Link>
  );
}
