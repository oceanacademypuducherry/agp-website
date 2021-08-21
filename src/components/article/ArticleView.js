import React, { useState, useEffect } from "react";
import "./articleView.css";
import firebase from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function ArticleView() {
  // const articleID = useSelector((state) => state.articleId);
  let { id } = useParams();
  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    image: "",
    error: "",
  });
  function getArticleData() {
    const firestore = firebase.firestore();
    firestore
      .collection("articles")
      .doc(id)
      .get()
      .then((respons) => {
        setArticleData({
          ...articleData,
          title: respons.data().articleName,
          description: respons.data().content,
          image: respons.data().articleImage,
        });
      })
      .catch((error) => {
        setArticleData({
          ...articleData,
          error: error,
        });
        alert("somthing went wrong pleas try again later");
      });
  }
  useEffect(() => {
    getArticleData();
  }, []);

  console.log(articleData);

  return (
    <div>
      <div className="av-article-img-div">
        <img src={articleData.image} alt="article image" />
        <div className="av-article-title">{articleData.title}</div>
      </div>
      <div className="av-article-content">{articleData.description}</div>
    </div>
  );
}
