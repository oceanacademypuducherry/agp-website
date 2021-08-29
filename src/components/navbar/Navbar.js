import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import "./navbar.css";
import { logo } from "../images/allImages";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import BookIcon from "@material-ui/icons/Book";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AssignmentIcon from "@material-ui/icons/Assignment";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

export default function TopNavbar() {
  return (
    <Navbar
      variant="light"
      bg="light"
      expand="md"
      collapseOnSelect
      sticky="top"
    >
      <Navbar.Brand>
        <NavLink
          href="/#home"
          style={{
            display: "flex",
            alignItems: "flex-start",

            padding: 0,
          }}
        >
          <img src={logo} width="50" style={{ padding: 0, margin: 0 }} />{" "}
          <div className="title-nav">
            <span className="company-name">MAKARAJOTHI</span>
            <span className="tamil">மகரஜோதி</span>
          </div>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto h5 text-left ">
          <Nav.Link className="navLink" href="/#home">
            <span className="navIcon">
              <HomeIcon />{" "}
            </span>{" "}
            Home
          </Nav.Link>
          <Nav.Link href="/#about-us">
            <span className="navIcon">
              <InfoIcon />
            </span>
            About Us
          </Nav.Link>
          <Nav.Link href="/#books">
            {" "}
            <span className="navIcon">
              <BookIcon />{" "}
            </span>{" "}
            Books
          </Nav.Link>
          <Nav.Link href="/#videos">
            {" "}
            <span className="navIcon">
              <VideoLibraryIcon />{" "}
            </span>{" "}
            Videos
          </Nav.Link>
          <Nav.Link href="/#article">
            {" "}
            <span className="navIcon">
              <AssignmentIcon />{" "}
            </span>{" "}
            Article
          </Nav.Link>
          <Nav.Link href="/#query">
            {" "}
            <span className="navIcon">
              <QuestionAnswerIcon />{" "}
            </span>{" "}
            Query
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
