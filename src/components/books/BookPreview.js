import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { book } from "../images/allImages";
import "./book_preview.css";
import { Row, Col } from "react-bootstrap";
import { FaHeart, FaShare } from "react-icons/fa";
import firebase from "../../firebase";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const onError = (e) => {
  alert(e, "error in file-viewer");
};

export default function BookPreview() {
  // const selectedBook = useSelector((state) => state.allBooks);

  const docs = [
    {
      uri: "https://www.casebook.net/wp-content/uploads/2017/01/government-technology-7715.pdf",
    },
    {
      uri: "https://images.unsplash.com/photo-1627338733668-8b7858a639bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80",
    },
  ];

  let { id } = useParams();
  const [bookData, setBookData] = useState({
    bookTitle: "book name",
    bookImg: "",
    description: "",
    pdfLink: "",
  });

  function getBookData() {
    const firestore = firebase.firestore();
    firestore
      .collection("books")
      .doc(id)
      .get()
      .then((data) => {
        setBookData({
          ...bookData,
          bookTitle: data.data().bookName,
          bookImg: data.data().bookLink,
          description: data.data().description,
          pdfLink: data.data().link,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    // console.log(selectedBook.books[0].bookName);
    getBookData();
  }, []);
  return (
    <div className="book-preview">
      <div className="book-preview-row">
        <Row>
          <Col lg={5} className="bp-col bp-i">
            <div className="book-image">
              <img src={`${bookData.bookImg}`} className="img" />
            </div>
          </Col>

          <Col lg={7} className="bp-col bp-c">
            <div className="book-preview-content-col">
              <div className="bp-title">{`${bookData.bookTitle}`}</div>
              <div className="bp-content">
                {`${bookData.description.slice(0, 500)}... `}
                <span className="bp-read-more">Read more</span>
              </div>
              <div className="bp-icons">
                <div className="bp-like">
                  <div className="bp-fav">
                    <FaHeart className="heart-color" /> <span>25</span>
                  </div>
                  <div className="bp-share">
                    <FaShare className="share-color" />
                  </div>
                </div>
              </div>
              <div className="bp-buttons">
                <div className="bp-button read">Read Now</div>
                <div className="bp-button download">Download</div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <div className="wordfile">
          <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            theme={{
              primary: "purple",
              text_primary: "orange",
              secondary: "pink",
              text_secondary: "green",
              tertiary: "blue",
              text_tertiary: "red",
              disableThemeScrollbar: false,
            }}
          />
        </div> */}
      </div>
    </div>
  );
}
