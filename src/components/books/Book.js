import React from "react";
import { Link } from "react-router-dom";

export default function Book({ img, title, id }) {
  return (
    <Link to={`/book-preview/${id}`}>
      <div className="book-container">
        <div className="book">
          <img src={img} alt="" className="book-img" />
        </div>
        <div className="book-title">{title}</div>
        {/* <div className="book-preview-button btn-fluid btn-success">Preview</div> */}
      </div>
    </Link>
  );
}
