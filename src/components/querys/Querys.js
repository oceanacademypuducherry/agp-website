import React from "react";
import SectionTitle from "../common/SectionTitle";
import Query from "./Query";
import "./querys.css";
import { author } from "../images/allImages";

export default function Querys() {
  return (
    <div id="query" className="querys-div">
      <SectionTitle title="Querys" />
      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      <div className="all-querys">
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
      </div>
    </div>
  );
}
