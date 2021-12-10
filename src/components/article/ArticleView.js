import React, { useState, useEffect } from "react";
import "./articleView.css";
import firebase from "../../firebase";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
export default function ArticleView() {
  const landPost = "<h1>Loading... post</h1>";

  const startingElement = ReactHtmlParser(landPost);
  const [postElement, setPostElement] = useState(startingElement);
  const [postElementTitle, setPostElementTitle] = useState(startingElement);
  // const articleID = useSelector((state) => state.articleId);
  let { id, postId } = useParams();
  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    image: "",
    postId: postId,
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
          postId: respons.data().postId,
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
  function getPostData() {
    axios
      .get(
        `https://www.googleapis.com/blogger/v3/blogs/9140876532055589480/posts/${postId}?key=AIzaSyCQ9jLjt8Ekd1Eq08LXHnycX8deR-heco0`
      )
      .then((respons) => {
        setPostElement(ReactHtmlParser(respons.data.content));
        setPostElementTitle(ReactHtmlParser(respons.data.title));
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getArticleData();
    getPostData();
  }, []);

  return (
    <div>
      <div className="av-article-img-div">
        {/* <img src={articleData.image} alt="article image" /> */}
        <div className="av-article-title">{postElementTitle}</div>
      </div>
      <div className="av-article-content">{postElement}</div>
    </div>
  );
}
