import React, { useEffect, useState } from "react";
import Article from "./Article";
import "./article.css";
import firebase from "../../firebase";

export default function SeeAllArticle() {
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

  return (
    <div className="see-all-article">
      <div className="saa-wrap">
        {article.map((item, key) => (
          <Article
            key={key}
            articleImg={item.articleImage}
            title={item.articleName}
            description={item.content}
            docId={item.docId}
            postId={item.postId}
          />
        ))}
      </div>
    </div>
  );
}
