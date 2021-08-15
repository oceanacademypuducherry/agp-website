import React from "react";
import Book from "./Book";
import "./books.css";
import SectionTitle from "../common/SectionTitle";
import { book } from "../images/allImages";

export default function Books() {
  return (
    <div>
      <SectionTitle title="Free Books" />
      <Book />
    </div>
  );
}
