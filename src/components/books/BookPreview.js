import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
          bookImg: data.data().image,
          description: data.data().description,
          pdfLink: data.data().pdfLink,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    getBookData();
  }, []);
  return (
    <div className="book-preview">
      <div className="book-preview-row">
        <div className="book-image">
          <img src={`${bookData.bookImg}`} className="img" />
        </div>

        <div className="book-preview-content-col">
          <div className="div">
            <div className="bp-title">{`${bookData.bookTitle}`}</div>
            <div className="bp-content">
              {`${bookData.description}... `}
              <span className="bp-read-more">Read more</span>
            </div>
          </div>
          {/* <div className="bp-icons">
            <div className="bp-like">
              <div className="bp-fav">
                <FaHeart className="heart-color" /> <span>25</span>
              </div>
              <div className="bp-share">
                <FaShare className="share-color" />
              </div>
            </div>
          </div> */}
          <div className="bp-buttons">
            {/* <Link
                  to={`/agp-website/doc/books/${id}/pdfLink`}
                  className="to-link"
                >
                  <div className="bp-button read">Read Now</div>
                </Link> */}

            <a href={bookData.pdfLink} target="_blank" className="to-link">
              {" "}
              <div className="bp-button download">Read Now</div>
            </a>
          </div>
        </div>

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
