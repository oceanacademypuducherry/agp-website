import React, { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Article from "./Article";
import "./article.css";
import { articleimg } from "../images/allImages";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { articleDataRequest } from "../../redux/action";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

export default function Articles() {
  const [article, setArticle] = useState([]);
  const firestore = firebase.firestore();
  const articleData = firestore.collection("articles").get();
  function getAricleData() {
    let al = [];
    articleData.then((response) => {
      let doc = response.docs;
      doc.map((item, key) => {
        let dbFields = item.data();
        dbFields["docId"] = item.id;
        dbFields["key"] = key;
        al.push(dbFields);
      });
      setArticle(al);
    });
  }

  useEffect(() => {
    getAricleData();
  }, []);

  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1300, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
    { width: 1800, itemsToShow: 5 },
  ];

  return (
    <div id="article" className="article-div">
      <SectionTitle title="Articles" />

      <div className="see-all">
        <Link to={`/agp-website/article/seeAll`} className="see-all-text ">
          See All
        </Link>
      </div>

      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        enableAutoPlay={false}
        showArrows={false}
      >
        {article.map((item, key) => (
          <Article
            key={key}
            articleImg={item.articleImage}
            title={item.articleName}
            description={item.content}
            docId={item.docId}
            articleId={item.postId}
          />
        ))}
      </Carousel>
      {/* </div> */}
    </div>
  );
}
