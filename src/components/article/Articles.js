import React from "react";
import SectionTitle from "../common/SectionTitle";
import Article from "./Article";
import "./article.css";
import { article } from "../images/allImages";
export default function Articles() {
  return (
    <div id="article" className="article-div">
      <SectionTitle title="Articles" />
      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      <div className="all-articles">
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
      </div>
    </div>
  );
}
