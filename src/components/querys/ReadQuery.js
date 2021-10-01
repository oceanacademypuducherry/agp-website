import React, { useEffect, useState } from "react";
import "./readQuery.css";
import RecommendedQuery from "./RecommendedQuery";
import { useParams } from "react-router-dom";
import firebase from "../../firebase";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

export default function ReadQuery() {
  const landPost = "<h1>Loading... post</h1>";

  const startingElement = ReactHtmlParser(landPost);
  const [postElement, setPostElement] = useState(startingElement);
  const [postElementTitle, setPostElementTitle] = useState(startingElement);
  const { queryId, postId } = useParams();
  const selectedQuery = firebase
    .firestore()
    .collection("queries")
    .doc(queryId)
    .get();
  const [viewQuery, setViewQuery] = useState({});

  function getPostData() {
    axios
      .get(
        `https://www.googleapis.com/blogger/v3/blogs/1887870844984411174/posts/${postId}?key=AIzaSyCQ9jLjt8Ekd1Eq08LXHnycX8deR-heco0`
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
    selectedQuery
      .then((respons) => {
        setViewQuery(respons.data());
      })
      .catch((error) => {
        alert("somthing went wrong");
      });
    getPostData();
  }, [queryId, postId]);
  return (
    <Row>
      <Col lg={8}>
        <div className="main-query">
          <div className="queryImage">
            <img src={viewQuery.queryImage} />
          </div>
          <div className="postDb-title">{postElementTitle}</div>
          <div className="postDb-content" style={{ textAlign: "justify" }}>
            {postElement}
          </div>
        </div>
      </Col>
      <Col lg={4} className="list-of-query">
        <RecommendedQuery />
      </Col>
    </Row>
  );
}
