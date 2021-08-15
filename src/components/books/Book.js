import React from "react";

export default function Book({ img }) {
  return (
    <div>
      <div className="book-container">
        <div className="book">
          <img src={img} alt="" className="book-img" />
        </div>
        <div className="book-title">I3 Reasons why </div>
        {/* <div className="book-preview-button btn-fluid btn-success">Preview</div> */}
      </div>
    </div>
  );
}
