import React, { useState, useEffect } from "react";
import "./articleView.css";
import firebase from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// articleImage: "https://firebasestorage.googleapis.com/v0/b/astrology-7cec1.appspot.com/o/articles%2Fmatches.png?alt=media&token=39035f00-ce3e-45c9-b7a5-71c14d38d999"
// articleName: "Astro"
// content: "Lorem Ipsum

export default function ArticleView() {
  const articleID = useSelector((state) => state.articleId);
  let { id } = useParams();

  console.log("KKKKKKKKKKKKKKKKK");
  console.log(articleID);
  console.log("KKKKKKKKKKKKKKKKK");
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
