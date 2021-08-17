import React, { useEffect } from "react";
import SectionTitle from "../common/SectionTitle";
import Article from "./Article";
import "./article.css";
import { article } from "../images/allImages";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { articleDataRequest } from "../../redux/action";

export default function Articles() {
  const dispatch = useDispatch();
  const allArticles = useSelector((state) => state.allArticles);
  const { loading, articles, error } = allArticles;
  useEffect(() => {
    dispatch(articleDataRequest());
  }, [dispatch]);
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
    { width: 1800, itemsToShow: 6 },
  ];

  return (
    <div id="article" className="article-div">
      <SectionTitle title="Articles" />
      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      {/* <div className="all-articles"> */}
      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        enableAutoPlay={false}
        showArrows={false}
      >
        {loading ? (
          <h1>article Loading</h1>
        ) : error ? (
          <h1>article Error</h1>
        ) : (
          articles.map((article) => (
            <Article articleImg={article.articleImage} />
          ))
        )}
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
        <Article articleImg={article} />
      </Carousel>
      {/* </div> */}
    </div>
  );
}
