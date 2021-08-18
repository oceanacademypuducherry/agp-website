import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { book } from "../images/allImages";
import "./book_preview.css";
import { Row, Col } from "react-bootstrap";
import { FaHeart, FaShare } from "react-icons/fa";
export default function BookPreview() {
  const selectedBook = useSelector((state) => state.allBooks);
  let { id } = useParams();
  useEffect(() => {
    // console.log(selectedBook.books[0].bookName);
  }, []);
  return (
    <div className="book-preview">
      <div className="book-preview-row">
        <Row>
          <Col lg={5} className="bp-col bp-i">
            <div className="book-image">
              <img src={`${selectedBook.books[id].bookLink}`} className="img" />
            </div>
          </Col>

          <Col lg={7} className="bp-col bp-c">
            <div className="book-preview-content-col">
              <div className="bp-title">{`${selectedBook.books[id].bookName}`}</div>
              <div className="bp-content">
                {`${selectedBook.books[id].description.slice(0, 500)}... `}
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
      </div>
    </div>
  );
}
