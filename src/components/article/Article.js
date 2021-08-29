import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  articleImg,
  docId,
  title,
  description,
  articleId,
}) {
  return (
    <div className="all-articles">
      <Link
        to={`/agp-website/article-view/${docId}/${articleId}`}
        className="to-link"
      >
        <div className="article-container">
          <div className="article-img">
            <img src={articleImg} alt="" />
          </div>
          <div className="article-all-content">
            <div className="auth-info">
              <div className="profile-pic">
                <img
                  data-object-fit="cover"
                  src="https://firebasestorage.googleapis.com/v0/b/ocean-live-project-ea2e7.appspot.com/o/auth.jpg?alt=media&token=566d6c80-fcf7-4ac6-bcf4-0e3977c00add"
                  alt=""
                />
              </div>
              <div className="auth-name">Author Name</div>
            </div>

            <div className="article-main-content">
              <div className="article-title">{title.slice(0, 55)}...</div>
              <div className="article-subtitle">
                {description.slice(0, 75)}...
              </div>
            </div>
            <div className="read-more">Read more</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
