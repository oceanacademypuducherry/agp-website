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
        <NavLink href="/agp-website/#home" className="">
          <img src={logo} width="50" />{" "}
          <span className="company-name">Astro Guruji</span>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto h5 text-left ">
          <Nav.Link href="/agp-website/#home">Home</Nav.Link>
          <Nav.Link href="/agp-website/#about-us">About Us</Nav.Link>
          <Nav.Link href="/agp-website/#books">Books</Nav.Link>
          <Nav.Link href="/agp-website/#videos">Videos</Nav.Link>
          <Nav.Link href="/agp-website/#article">Article</Nav.Link>
          <Nav.Link href="/agp-website/#query">Query</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
