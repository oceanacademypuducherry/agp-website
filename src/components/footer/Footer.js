import React from "react";
import "./footer.css";
import { logoWhite } from "../images/allImages";
import { Link } from "react-router-dom";
import apple from "./appleStore.png";
import play from "./googlePlay.png";
import { Row, Col, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copy-right-content">
        <Row>
          <Col md={3} className="text-center">
            <img src={logoWhite} alt="" height="150" />
          </Col>
          <Col md={3} className="text-light">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="fc-name fcinfo">Makarajothi Astro Labs</div>
              <div className="fc-address fcinfo">
                Coimbatore, Tamilnadu
                {/* No.10, Second Floor, 45 Feet Rd, near HDFC Bank, Venkateshwara
                Nagar, Saram, Puducherry 605013 */}
              </div>
              <div className="fc-number fcinfo">+91 9842855294</div>
            </div>
          </Col>
          <Col
            md={3}
            className="text-light"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <h4>Navigation</h4>

            <Row style={{ textAlign: "center" }}>
              <Col>
                <Nav.Link href="/#home" className="bottom-nav text-light">
                  Home
                </Nav.Link>
                <Nav.Link href="/#about-us" className="bottom-nav text-light">
                  About Us
                </Nav.Link>
                <Nav.Link href="/#books" className="bottom-nav text-light">
                  Books
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/#videos" className="bottom-nav text-light">
                  Videos
                </Nav.Link>
                <Nav.Link href="/#article" className="bottom-nav text-light">
                  Article
                </Nav.Link>
                <Nav.Link href="/#query" className="bottom-nav text-light">
                  Query
                </Nav.Link>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="text-light">
            <h4>Download our App</h4>
            <Link
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.Makarajothi.AstroLab"
                );
              }}
              className="store"
            >
              <img src={play} alt="" />
            </Link>
            <br />
            <Link
              className="store"
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.Makarajothi.AstroLab"
                );
              }}
            >
              <img src={apple} alt="" />
            </Link>
          </Col>
        </Row>
        {/* <div className="crc-icons">
          <Link>
            <YouTubeIcon fontSize="large" style={{ margin: 5, color: "red" }} />
          </Link>
          <Link>
            <FacebookIcon
              fontSize="large"
              style={{ margin: 5, color: "#4867AA" }}
            />
          </Link>
          <Link>
            <InstagramIcon
              fontSize="large"
              style={{ margin: 5, color: "#F76342" }}
            />
          </Link>
        </div>
        */}
        <div className="crc-text text-light">
          ?? 2021 Makarajothi, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
