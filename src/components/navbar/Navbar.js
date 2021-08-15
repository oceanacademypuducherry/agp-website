import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import "./navbar.css";
import { logo } from "../images/allImages";

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
        <NavLink href="#home" className="">
          <img src={logo} width="50" />{" "}
          <span className="company-name">Astro Guruji</span>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto h5 text-left ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#books">Books</Nav.Link>
          <Nav.Link href="#videos">Videos</Nav.Link>
          <Nav.Link href="#article">Article</Nav.Link>
          <Nav.Link href="#query">Query</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
