import React from "react";
import { Link } from "react-router-dom";

export default function Query({
  authorImg,
  question,
  answer,
  image,
  queryId,
  postId,
}) {
  return (
    <Link
      to={`/agp-website/query/read-query/${queryId}/${postId}`}
      className="to-link"
    >
      <div className="q-padding">
        <div className="query-container">
          <div className="image">
            <img src={image} />
          </div>
          <div className="question">
            {question.length > 75 ? `${question.slice(0, 75)}...` : question}
          </div>
          <hr />
          <div className="answer">
            {answer.length > 150 ? `${answer.slice(0, 150)}...` : answer}
            {/* {answer.length > 150 && (
              <span style={{ color: "#0489b4", cursor: "pointer" }}>
                Read more
              </span>
            )} */}
          </div>
          <hr />
          <div className="author">
            <div className="author-img">
              <img src={authorImg} alt="" />
            </div>
            <div className="author-name">Author name</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
