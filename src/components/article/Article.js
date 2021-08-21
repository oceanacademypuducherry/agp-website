import React from "react";
import { Link } from "react-router-dom";

export default function Article({ articleImg, docId, title, description }) {
  return (
    <div className="all-articles">
      <Link to={`/article-view/${docId}`} className="to-link">
        <div className="article-container">
          <div className="article-img">
            <img src={articleImg} alt="" />
          </div>
          <div className="article-all-content">
            <div className="auth-info">
              <div className="profile-pic">
                <img
                  data-object-fit="cover"
                  src="https://www.whatsappimages.in/wp-content/uploads/2021/03/Girls-Whatsapp-DP-Photo-Downlaod.jpg"
                  alt=""
                />
              </div>
              <div className="auth-name">thamizhhd</div>
            </div>

            <div className="article-main-content">
              <div className="article-title">{title}</div>
              <div className="article-subtitle">{description}</div>
            </div>
            <div className="read-more">Read more</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
