import React from "react";

export default function Query({ authorImg }) {
  return (
    <div className="q-padding">
      <div className="query-container">
        <div className="question">what is your name ?</div>
        <div className="answer">
          extracted parts in a new string. Use the start and end parameters to
          specify the part of the string you want to extract. The first
          character has the position 0, the second has position 1, and so on
        </div>
        <div className="author">
          <div className="author-img">
            <img src={authorImg} alt="" />
          </div>
          <div className="author-name">Author name</div>
        </div>
      </div>
    </div>
  );
}
